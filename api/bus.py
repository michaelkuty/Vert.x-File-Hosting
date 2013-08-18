import vertx
from core.event_bus import EventBus
from core.file_system import FileSystem

logger = vertx.logger()
fs = vertx.file_system()

def msg_handler(message):
    logger.info("Got message body %s"% message.body)

path_upload = "files/upload/"
#filebane "C:/Users/Michael/Documents/GitHub/vertxapp/files/symlink/te.zip"
#target "C:/Users/Michael/Documents/GitHub/vertxapp/files/temp/firma"
def unzip(filename, target, delete=None):
    def reply_handler(message):
            logger.info("unzip module result:  %s"%message.body)
            if delete: logger.info("zip will be deleted after success unzip")
    logger.info("send unzip message")
    if delete != None:
           EventBus.send('unzip.module', {"zipFile": filename,"destDir":target, "deleteZip": delete},reply_handler)
    else: EventBus.send('unzip.module', {"zipFile": filename,"destDir":target},reply_handler)

#for debug
def create_dir(username):
    def reply_handler(msg):
        #logger.info(msg.body["result"]["_id"])
        fs.mkdir(path_upload+msg.body["result"]["_id"], perms=None, handler=None)
    EventBus.send('vertx.mongopersistor', {'action': 'findone', 'collection': 'users', 'matcher': {"username":username}}, reply_handler)

#method get eventbus message from db and get uid directory in global path
#if not exists method create dir with user _id
#if not exist user method reply status
def get_or_create(message):
    username = message.body["username"]
    def reply_handler(msg):
        #logger.info(msg.body["result"])
        uid = ""
        if (msg.body.get("result")):
            uid = msg.body["result"]["_id"]
            def exists_handler(err, msg):
                if not err: 
                    #logger.info(msg)
                    if (msg == "true"):
                        message.reply(uid)
                    else: 
                        def reply_handler(msg):
                             #logger.info(msg.body["result"]["_id"])
                             fs.mkdir(path_upload+uid, perms=None, handler=None)
                             message.reply(uid)
                        EventBus.send('vertx.mongopersistor', {'action': 'findone', 'collection': 'users', 'matcher': {"username":username}}, reply_handler)
                else: err.printStackTrace()
            #logger.info(msg.body["result"]["_id"])
            fs.exists(path_upload+uid, handler=exists_handler)
        else: message.reply("user not exists")
    EventBus.send('vertx.mongopersistor', {'action': 'findone', 'collection': 'users', 'matcher': {"username":username}}, reply_handler)
    

def db_stats(collection):
    def reply_handler1(message):
        logger.info("message.body")
        logger.info(message.body)
    message = {
        'action': 'collectionStats',
        'collection': collection
    }
    logger.info("send message")
    EventBus.send('vertx.mongopersistor', message ,reply_handler1)