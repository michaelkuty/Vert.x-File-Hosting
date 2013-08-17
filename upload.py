import random
import string
import vertx

from core.file_system import FileSystem
from core.streams import Pump
from core.http import RouteMatcher 
from core.http import MultiMap
from datetime import datetime
from cleaner import set_one_timer


server = vertx.create_http_server()
route_matcher = RouteMatcher()

fs = vertx.file_system()
path = "files/"

def request_handler(req):
    req.pause()

    path_to_upload = path

    req.set_expect_multipart(True)
    print "zaciname"
    #create temp name
    filename = "%s%s"% (path_to_upload, "temp/") 
    for i in range(10):
        filename += string.uppercase[random.randrange(26)]
    filename += '.uploaded'
    
    #call when fileupload was complete
    #file move and create link to file
    def upload_handler(upload):
        # create path for file with new name
        path_to_file = "%supload/%s"% (path_to_upload,upload.filename)
        path_to_symlink = "%ssymlink/%s"% (path_to_upload,upload.filename)

        def handle(err,res):
            print("file moved from: %s to: %s")% (filename, path_to_file)
            if err: print err
        #file move
        fs.move(filename, path_to_file, handler=handle)
        def handle_symlink(err,res):
            print "create symlink for: %s"% (path_to_symlink)
            if err: print err
        fs.link(path_to_symlink,path_to_file,handler=handle_symlink)

    req.upload_handler(handler=upload_handler)
    
    print "Got request storing in %s"% filename

    #file upload with response
    def file_open(err, file):
        pump = Pump(req, file)
        start_time = datetime.now()

        def end_handler():
            def file_close(err, file):
                end_time = datetime.now()
                print "Uploaded %d bytes to %s in %s"%(pump.bytes_pumped, filename, end_time-start_time)
                req.response.chunked = True
                req.response.status_code = 201
                req.response.status_message = "File uploaded"
                res = "{\"result\":\"%s\"\"size\":\"%s\"}"% ("ok",pump.bytes_pumped)
                req.response.put_header("Content-Type","application/json")
                req.response.end(res)
            file.close(file_close)
        req.end_handler(end_handler)
        pump.start()
        req.resume()

    fs.open(filename, handler=file_open,create_new=True,flush=True)
    #set_one_timer(10000, filename)

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

def file_handler(req):
    name = "%s%s%s"% (path,"symlink/",req.params['filename'])
    
    req.response.send_file(name)

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

route_matcher.post('/upload', request_handler)
route_matcher.get('/', index_handler)
route_matcher.get('/:filename', file_handler)

server.request_handler(route_matcher).listen(8888, '0.0.0.0')