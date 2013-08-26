import vertx
from core.file_system import FileSystem
from core.event_bus import EventBus

from server.bus import bus_utils

logger = vertx.logger()
fs = vertx.file_system() 

path_public = "files/public/"
path_private = "files/private/"
path_symlink = "files/symlink/"

#TODO with private
#only public files
#content type headers
def get_file(req, path, uid, filename):
    #logger.info(path)
    #logger.info(uid)
    #logger.info(filename)
    def uid_exists(err, res):
        if not err:
            def mkdir(err, res):
                logger.info("mkdir OK")
                def handle_symlink(err,res):
                    if err:
                       logger.info(err)
                    req.response.status_code = 200
                    #req.response.put_header("Content-Type", "image/png")
                    req.response.send_file(path_symlink + uid + "/" + filename)
                fs.link(path_symlink + uid + "/" + filename, path + uid + "/" + filename,handler=handle_symlink)
            fs.mkdir(path_symlink + uid, handler = mkdir)
        else:
            req.response.status_code = 404
            req.response.end("No such file or directory")
    fs.exists(path + uid, handler = uid_exists)

#TODO remove params from call
def file_handler(req):
    filename = req.params.get("filename", None)    
    uid = req.params.get("uid", None)
    if (filename != None and uid != None):
        def get_auth_uid_handler(msg):
            if (msg.body != None):
                userID = msg.body
                get_file(req, "files/private/", userID,filename)
            else:
        		get_file(req,path_public,uid,filename) 
        EventBus.send("get_auth_uid", {"sessionID":uid}, get_auth_uid_handler)
    else:
        req.response.status_code = 404
        req.response.end("missing params")