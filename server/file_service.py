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
def get_public_file(req, path, uid, filename):
    def uid_exists(err, res):
        if not err:
            def mkdir(err, res):
                if not err:
                    def handle_symlink(err,res):
                        if not err:

                            req.response.status_code = 200
                            #req.response.put_header("Content-Type", "image/png")
                            req.response.send_file(path + uid + "/" + filename)
                        else:
                            req.response.status_code = 200
                            req.response.send_file(path + uid + "/" + filename) 

                    fs.link(path + uid + "/" + filename,path + uid + "/" + filename,handler=handle_symlink)
                else:
                    req.response.status_code = 200
                    req.response.send_file(path + uid + "/" + filename) 
            fs.mkdir(path + uid, handler = mkdir)
        else:
            req.response.status_code = 404
            req.response.end("No such file or directory")
    fs.exists(path + uid, handler = uid_exists)

#TODO remove params from call
def file_handler(req):
    filename = req.params.get("filename", None)
    uid = req.params.get("uid", None)
    if (filename != None and uid != None):
        def get_auth_uid(msg):
            if (msg.body != None):
                userID = uid.body
                get_public_file(req, path_private, userID,filename)
            else:
        		get_public_file(req, path_public, uid,filename) 
        EventBus.send("get_auth_uid", {"sessionID":uid}, get_auth_uid)
    else:
        req.response.status_code = 404
        req.response.end("missing params")