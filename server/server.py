import vertx
from core.event_bus import EventBus
from core.file_system import FileSystem
from core.http import RouteMatcher 
from core.event_bus import EventBus
from core.sock_js import SockJSServer
from api.messages import bus_messages

from api import bus
from api import bus_utils
from api import upload
from api import mailer

#inicialize
server = vertx.create_http_server()
sock_server = vertx.create_http_server()
route_matcher = RouteMatcher()
logger = vertx.logger()
fs = vertx.file_system()
app_config = vertx.config()

#set global
path_web = app_config['paths']['web']
path_public = app_config['paths']['path_public']
path_symlink = app_config['paths']['path_symlink']

#cros module variable
##TODO  
upload.path_public = path_public
upload.path_symlink = path_symlink
upload.path_upload = app_config['paths']['path_private']
upload.path_temp = app_config['paths']['path_temp']
bus.path_upload = app_config['paths']['path_private']


def index_handler(req):    
    req.response.send_file( "%sindex.html"% path_web)

@route_matcher.no_match 
def source_handler(req):
    if ("js" in req.uri) or ("css" in req.uri) or ("images" in req.uri) or ("pages" in req.uri):
        #logger.info(req.uri)
        req.response.send_file("%s%s"% (path_web,req.uri))
    else:
        #req.response.put_header('Expect', '404-Continue')
        req.response.status_code = 404
        req.response.end()

def file_info(req):
    def props_handler(err, props):
        if err:
            logger.error("Failed to retrieve file props: %s"% err)
        else:
            logger.info('File props are:')
            logger.info("Last accessed: %s"% props.symbolic_link)
            req.response.status_code = 200
            #req.response.status_message = props.symbolic_link
            
    name = "%s%s"% (path_symlink,req.params['filename'])
    logger.info(name)
    #fs.props(name, props_handler)

#response file todo if exist etc
def file_handler(req):
    filename = req.params.get("filename", None)
    uid = req.params.get("uid", None)
    if (filename != None and uid != None):
        def uid_exists(err, res):
            if not err:
                def mkdir(err, res):
                    if not err:
                        def handle_symlink(err,res):
                            if not err:

                                req.response.status_code = 200
                                req.response.put_header("Content-Type", "image/png")
                                req.response.send_file(path_symlink + uid + "/" + filename)
                            else:
                                req.response.status_code = 200
                                req.response.send_file(path_symlink + uid + "/" + filename) 

                        fs.link(path_symlink + uid + "/" + filename,path_public + uid + "/" + filename,handler=handle_symlink)
                    else:
                        req.response.status_code = 200
                        req.response.send_file(path_symlink + uid + "/" + filename) 
                fs.mkdir(path_symlink + uid, handler = mkdir)
            else:
                req.response.status_code = 404
                req.response.end("No such file or directory")
        fs.exists(path_public + uid, handler = uid_exists)
    else:
        req.response.status_code = 404
        req.response.end("missing params")

route_matcher.post('/upload', upload.upload_handler)
route_matcher.get('/dl/:uid/:filename', file_handler)
route_matcher.get('/', index_handler)

def get_or_create(message):
    bus.get_or_create(message)

EventBus.register_handler('get_or_create', handler=get_or_create)

#
def read_dir(message):
    logger.info("read_dir_comment")
    bus.read_dir(message)
EventBus.register_handler('read_dir', handler=read_dir)

def simple_search(message):
    message.body["collection"] = app_config.get("files_collection","files")
    bus.simple_search(message)

EventBus.register_handler('simple_search', handler=simple_search)

def get_auth_user(message):
    message.body["collection"] = app_config.get("users_collection","users")
    bus_utils.get_auth_user(message)

EventBus.register_handler('get_auth_user', handler=get_auth_user)

def registration(message):
    message.body["collection"] = app_config.get("users_collection","users")
    bus_utils.user_save_or_update(message)

EventBus.register_handler('registration', handler=registration)
EventBus.register_handler('update_user', handler=registration)

def exist_in_db(message):
    message.body["collection"] = app_config.get("users_collection","users")
    bus_utils.exist_in_db(message)

EventBus.register_handler('exist_in_db', handler=exist_in_db)

#{sessionID, name}
def mkdir_path(message):
    bus.mkdir_path(message)
EventBus.register_handler('mkdir_path', handler=mkdir_path)

#def get_locale_messages(req):
def get_hostname(message):
    message.reply("%s%s"% (app_config['host'],app_config['port']))

EventBus.register_handler('get_hostname', handler=get_hostname)

EventBus.register_handler('get_locale_messages', handler=bus_messages.get_locale_messages)

#set server
#server.set_send_buffer_size(4 * 1024)
#server.set_receive_buffer_size(100 * 1024)
logger.info("send buffer: %s"% server.send_buffer_size)
logger.info("receive buffer: %s"% server.receive_buffer_size)
#logger.info(server.use_pooled_buffers)
SockJSServer(sock_server).bridge({"prefix": "/eventbus"}, [{
            'address': 'vertx.basicauthmanager.login'
        },
        {
            'address': 'vertx.basicauthmanager.authorise'
        },
        {
            'address': 'vertx.basicauthmanager.logout'
        },
        {
            'address': 'simple_search'
        },
        {
            'address': 'get_or_create'
        },
        {
            'address': 'registration'
        },
        {
            'address': 'read_dir'
        },
        {
            'address': 'mkdir_path'
        },
        {
            'address': 'get_auth_user'
        },
        {
            'address': 'update_user'
        },
        {
            'address': 'get_hostname'
        },
        {
            'address': 'exist_in_db'
        },
        {
            'address': 'get_locale_messages'
        }], [{}])

sock_server.listen(app_config['port_bridge'])
server.request_handler(route_matcher).listen(app_config['port'], app_config['host'])