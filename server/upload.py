import random
import string
import vertx
import time
from datetime import date

from core.event_bus import EventBus
from core.file_system import FileSystem
from core.streams import Pump
from core.http import RouteMatcher
from core.http import MultiMap
from datetime import datetime

route_matcher = RouteMatcher()
logger = vertx.logger()
fs = vertx.file_system()
#global
path_upload = "files/private/"
path_symlink = "files/symlink/"
path_temp = "files/temp/"
path_public = "files/public/"

def upload_handler(req):
    req.pause()

    req.set_expect_multipart(True)
    logger.info(req.params.get('sessionID'))
    sessionID = req.params.get('sessionID', None)
    #create temp name
    filename = "%s"% path_temp 
    file_id = ""
    ##create more sofisticate uid
    for i in range(10):
        file_id += string.uppercase[random.randrange(26)]
    filename = filename +  file_id + '.uploaded'
    size = 0
    #call when fileupload was complete
    #file move and create link to file
    def upload_handler(upload):
        # create path for file with new name
        #TODO SEPARATION collections
        document = {
            "filename": upload.filename,
            "size": size,
            "ext": upload.filename.split('.')[len(upload.filename.split('.'))-1],
            "content_transfer_encoding": upload.content_transfer_encoding,
            "charset": upload.charset,
            "create_time": date.fromtimestamp(time.time()).strftime('%Y-%m-%d %H:%M:%S')
            }
        if (sessionID == None):
            document["public"] = True
            document["_id"] = file_id
            def save_file_db(message):
                def mkdir_handler(err, mkdir_res):
                    if not err:
                        fs.move(filename, path_public+ file_id + "/" + upload.filename, handler = None)
                fs.mkdir(path_public + file_id + "/",perms=None,handler=mkdir_handler)
                #TODO create dir from uid in public section and move file into
            EventBus.send("vertx.mongopersistor", {"action": "save","collection":"files","document":document}, reply_handler=save_file_db)
        else:
            document["public"] = False
            def get_auth_uid(msg):
                if (msg.body != None):
                    document["userID"] = msg.body
                    def save_file_db(message):
                        fs.move(filename, path_upload+msg.body+"/"+upload.filename, handler = None)
                        #logger.info(message.body) 
                    EventBus.send("vertx.mongopersistor", {"action": "save","collection":"files","document":document}, reply_handler=save_file_db)
            EventBus.send("get_auth_uid", {"sessionID":sessionID}, get_auth_uid)
    req.upload_handler(handler=upload_handler)

    logger.info("Got request storing in %s"% filename)

    #file upload with response
    
    def file_open(err, file):
        pump = Pump(req, file)
        start_time = datetime.now()

        def end_handler():
            def file_close(err, file):
                end_time = datetime.now()
                logger.info("Uploaded %d bytes to %s in %s"%(pump.bytes_pumped, filename, end_time-start_time))
                size = pump.bytes_pumped
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


