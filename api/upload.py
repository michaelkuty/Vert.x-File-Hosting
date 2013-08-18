import random
import string
import vertx

from core.file_system import FileSystem
from core.streams import Pump
from core.http import RouteMatcher
from core.http import MultiMap
from datetime import datetime

route_matcher = RouteMatcher()

fs = vertx.file_system()
#global
path_upload = "files/upload/"
path_symlink = "files/symlink/"
path_temp = "files/temp/"

def upload_handler(req):
    req.pause()

    req.set_expect_multipart(True)
    print "zaciname"
    #create temp name
    filename = "%s"% path_temp 
    for i in range(10):
        filename += string.uppercase[random.randrange(26)]
    filename += '.uploaded'
    
    #call when fileupload was complete
    #file move and create link to file
    def upload_handler(upload):
        # create path for file with new name
        path_to_file = "%s%s"% (path_upload,upload.filename)
        path_to_symlink = "%s%s"% (path_symlink,upload.filename)

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
    def end_handle(req):
        print "hello from end"
    req.end_handler(handler=end_handle)
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
    #cleaner.set_one_timer(10000, filename)

#response file todo if exist etc
def file_handler(req):
    name = "%s%s"% (path_symlink,req.params['filename'])
    
    req.response.send_file(name)
