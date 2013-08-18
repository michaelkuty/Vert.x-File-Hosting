import vertx

from core.file_system import FileSystem
from core.http import RouteMatcher 
from core.event_bus import EventBus

from api import upload
from api import bus

#inicialize
server = vertx.create_http_server()
route_matcher = RouteMatcher()
fs = vertx.file_system()
app_config = vertx.config()

#set global
path_web = app_config['path_web']
#cros module variable
upload.path_upload = app_config['path_upload']
upload.path_symlink = app_config['path_symlink']
upload.path_temp = app_config['path_temp']

def index_handler(req):
    req.response.send_file( "%slite.html"% path_web)

@route_matcher.no_match 
def source_handler(req):
    if "/js/" in req.uri:
        print req.uri
        req.response.send_file("%s%s"% (path_web,req.uri))
    else:
        #req.response.put_header('Expect', '404-Continue')
        req.response.status_code = 404
        req.response.end()

def file_info(req):
    def props_handler(err, props):
        if err:
            print "Failed to retrieve file props: %s"% err
        else:
            print 'File props are:'
            print "Last accessed: %s"% props.symbolic_link
            req.response.status_code = 200
            #req.response.status_message = props.symbolic_link
            
    name = "%s%s"% (path_symlink,req.params['filename'])
    print name
    #fs.props(name, props_handler)

route_matcher.post('/upload', upload.upload_handler)
route_matcher.get('/:filename', upload.file_handler)
route_matcher.get('/', index_handler)

#set server
server.request_handler(route_matcher).listen(app_config['port'], app_config['host'])