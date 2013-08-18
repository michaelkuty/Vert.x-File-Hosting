import vertx

from core.file_system import FileSystem
from core.http import RouteMatcher 
from core.event_bus import EventBus
from core.sock_js import SockJSServer

from api import upload
from api import bus

#inicialize
server = vertx.create_http_server()
sock_server = vertx.create_http_server()
route_matcher = RouteMatcher()
logger = vertx.logger()
fs = vertx.file_system()
app_config = vertx.config()

#set global
path_web = app_config['path_web']
#cros module variable
upload.path_upload = app_config['path_upload']
upload.path_symlink = app_config['path_symlink']
upload.path_temp = app_config['path_temp']

bus.path_upload = app_config['path_upload']


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
route_matcher.get('/:filename', upload.file_handler)
route_matcher.get('/', index_handler)

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
            'address': 'vertx.mongopersistor',
            'match': {
                'action': 'find',
                'collection': 'users'
            }
        }], [{}])
sock_server.listen(app_config['port_bridge'])
server.request_handler(route_matcher).listen(app_config['port'], app_config['host'])