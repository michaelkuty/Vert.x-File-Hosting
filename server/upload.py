import random
import string
import vertx

from core.file_system import FileSystem
from core.streams import Pump
from core.http import RouteMatcher 
from core.http import MultiMap
from core.event_bus import EventBus

from datetime import datetime

from api import upload
from api import bus

server = vertx.create_http_server()
route_matcher = RouteMatcher()

fs = vertx.file_system()

app_config = vertx.config()

path = app_config['path']



def index_handler(req):
    req.response.send_file( "web/lite.html")

@route_matcher.no_match 
def source_handler(req):
    if "/js/" in req.uri:
        print req.uri
        req.response.send_file("web/%s"% (req.uri))
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
            
    name = "%s%s%s"% (path,"symlink/",req.params['filename'])
    print name
    #fs.props(name, props_handler)

route_matcher.post('/upload', upload.upload_handler)
route_matcher.get('/:filename', upload.file_handler)
route_matcher.get('/', index_handler)

server.request_handler(route_matcher).listen(8888, '0.0.0.0')