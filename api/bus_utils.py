import vertx
from core.event_bus import EventBus
from core.file_system import FileSystem

logger = vertx.logger()
fs = vertx.file_system()

mongopersistor_address = 'vertx.mongopersistor'

path_upload = "files/upload/"

def get_user(message):
    def reply_handler(msg):
        logger.info(msg.body["result"]["_id"])
        message.reply(msg.body["result"])
    EventBus.send(mongopersistor_address, {'action': 'findone', 'collection': 'users', 'matcher': {"_id":message.body.get("userID")}}, reply_handler)

#return username or None
#todo propagation auth address
def authorize(message):
    def authorise_handler(msg):
        if (msg.body.get("status") == "ok"):
            message.reply(msg.body.get("username"))
        else: 
            #logger.info("%s !!! %s"% (msg.body.get("session_id"), msg.body.get("status")))
            message.reply(None)
    EventBus.send('vertx.basicauthmanager.authorise', {"sessionID":message.body.get("sessionID")},authorise_handler)

#string uid
#reply True False None
def get_exists(message):
    def exists_handler(err, msg):
        if not err: 
            #logger.info(msg)
            if (msg == True):
                message.reply(True)
            else: 
                message.reply(False)
        else: 
            message.reply(None)
            err.printStackTrace()
    fs.exists(path_upload+message.body.get("uid"), handler=exists_handler)

#return string uid
def get_user_uid(message):
    def reply_handler(msg):
        #logger.info(msg.body["result"]["_id"])
        message.reply(msg.body["result"]["_id"])
    EventBus.send('vertx.mongopersistor', {'action': 'findone', 'collection': 'users', 'matcher': {"username":message.body.get("username")}}, reply_handler)

#simple unzip
def unzip(filename, target, delete=None):
    def reply_handler(message):
            logger.info("unzip module result:  %s"%message.body)
            if delete: logger.info("zip will be deleted after success unzip")
    logger.info("send unzip message")
    if delete != None:
           EventBus.send('unzip.module', {"zipFile": filename,"destDir":target, "deleteZip": delete},reply_handler)
    else: EventBus.send('unzip.module', {"zipFile": filename,"destDir":target},reply_handler)

#for debug
def mkdir(message):
    def reply_handler(err,res):
        #logger.info(msg.body["result"]["_id"])
        if not err:
        	message.reply(True)
        else: message.reply(False)
    fs.mkdir(path_upload+message.body.get("username"), perms=None, handler=reply_handler)

#refactor bus.db
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