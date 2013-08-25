import vertx
from core.file_system import FileSystem
from core.event_bus import EventBus

from server.bus import bus_utils

logger = vertx.logger()
fs = vertx.file_system() 

path_public = "files/public/"
path_private = "files/private/"

#TODO with private
#only public files
#content type headers
def get_public_file(req):
    def uid_exists(err, res):
        if not err:
            def mkdir(err, res):
                if not err:
                    def handle_symlink(err,res):
                        if not err:

                            req.response.status_code = 200
                            #req.response.put_header("Content-Type", "image/png")
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

def file_handler(req):
    filename = req.params.get("filename", None)
    uid = req.params.get("uid", None)
    if (filename != None and uid != None):
    	get_public_file(req)
    else:
        req.response.status_code = 404
        req.response.end("missing params")