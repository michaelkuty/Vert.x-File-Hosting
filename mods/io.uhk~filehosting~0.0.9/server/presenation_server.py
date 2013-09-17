import vertx
from core.file_system import FileSystem
from core.http import RouteMatcher 
#inicialize
server = vertx.create_http_server()

route_matcher = RouteMatcher()
logger = vertx.logger()
fs = vertx.file_system()
app_config = vertx.config()
path_web = app_config['paths']['web']
#cros module variable
##TODO  
def index_handler(req):
    if ("js" in req.uri) or ("css" in req.uri) or ("images" in req.uri) or ("pages" in req.uri):
        #logger.info(req.uri)
        req.response.send_file("%spresenation/%s"% (path_web,req.uri))
    else:
        req.response.send_file( "%spresentation/index.html"% path_web)

@route_matcher.no_match 
def source_handler(req):
    if ("js" in req.uri) or ("css" in req.uri) or ("images" in req.uri) or ("pages" in req.uri):
        req.response.send_file("%spresentation/%s"% (path_web,req.uri))

route_matcher.get('/', index_handler)

#set server
#server.set_send_buffer_size(4 * 1024)
#server.set_receive_buffer_size(100 * 1024)
#logger.info("send buffer: %s"% server.send_buffer_size)
#logger.info("receive buffer: %s"% server.receive_buffer_size)
#logger.info(server.use_pooled_buffers)
server.request_handler(route_matcher).listen(8080, app_config['host'])
