import vertx
from core.event_bus import EventBus
from core.file_system import FileSystem
from core.http import RouteMatcher 
from core.event_bus import EventBus
#from server.bus.messages import bus_messages

from server.bus import bus
from server.bus import bus_utils
from server import upload
from server import file_service
#inicialize
server = vertx.create_http_server()

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
file_service.path_public = path_public
file_service.path_private = app_config['paths']['path_private']
upload.path_symlink = path_symlink
bus.path_upload = app_config['paths']['path_private']
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

route_matcher.post('/upload', upload.upload_handler)
route_matcher.get('/dl/:uid/:filename', file_service.file_handler)
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

#def get_hostname
def get_hostname(message):
    message.reply("%s://%s:%s"% ("htpp",app_config['host'],app_config['port']))
EventBus.register_handler('get_hostname',handler=get_hostname)

def get_version(message):
    message.reply("%s"% (app_config.get("version", None)))
EventBus.register_handler('get_version', handler=get_version)

#EventBus.register_handler('get_locale_messages', handler=bus_messages.get_locale_messages)

#set server
#server.set_send_buffer_size(4 * 1024)
#server.set_receive_buffer_size(100 * 1024)
#logger.info("send buffer: %s"% server.send_buffer_size)
#logger.info("receive buffer: %s"% server.receive_buffer_size)
#logger.info(server.use_pooled_buffers)

server.request_handler(route_matcher).listen(app_config['port'], app_config['host'])
