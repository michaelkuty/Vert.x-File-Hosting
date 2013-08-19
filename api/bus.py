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
    username = message.body.get("username")
    def reply_handler(msg):
        #logger.info(msg.body["result"])
        uid = ""
        if (msg.body.get("result")):
            uid = msg.body["result"]["_id"]
            def exists_handler(msg):
                #logger.info(msg)
                if (msg.body == True):
                    message.reply(uid)
                if(msg.body == False):
                    def reply_handler(msg):
                         #logger.info(msg.body["result"]["_id"])
                         fs.mkdir(path_upload+uid, perms=None, handler=None)
                         message.reply(uid)
                    EventBus.send('vertx.mongopersistor', {'action': 'findone', 'collection': 'users', 'matcher': {"username":username}}, reply_handler)
                else: message.reply("error")
                #logger.info(msg.body["result"]["_id"])
            EventBus.send("exists.handler", {"uid":uid} , exists_handler)
        else: message.reply("user not exists")
    EventBus.send('vertx.mongopersistor', {'action': 'findone', 'collection': 'users', 'matcher': {"username":username}}, reply_handler)

#message{collection:collection, matcher:{ "_id": xxxx}}
def simple_search(message):
    collection = None
    matcher = None
    try:
        collection = message.body.get("collection")
        matcher = message.body.get("matcher")
    except Exception, e:
        logger.warn("search wrong params")
        collection = None
        matcher = None
    if (collection != None) and(matcher != None):
        def result_handler(msg):
            if (msg.body.get("status") == "ok"):
                for res in msg.body.get("result"):
                    logger.info(res)
        EventBus.send("vertx.mongopersistor", {"action":"find","collection":collection,"matcher":matcher},result_handler)
    else:
        message.reply("search wrong params")
#get serialize object
def json_dir_props(message):
    def read_dir_handler(err,res):
        if not err: 
            reply = {}
            for filename in res:
                def props_handler(err,res):
                    if not err: 
                        print str(res.directory)
                    else: 
                        logger.info(err)
                        print "None"
                fs.props(filename,handler=props_handler)
    fs.read_dir(path_upload+message.body,handler=read_dir_handler)
#TODOOO
#example eventbus server side
def read_dir(message):
    try:
        sessionID = message.body.get("sessionID")
    except Exception, e:
        logger.warn("authorize crash %s"% e)
        sessionID = None
    if (sessionID == None): message.reply("sessionID is not valid")

    def authorize_handler(msg):
        if (msg.body != None):
            def get_user_id(uid):
                def exists_handler(msge):
                    logger.info(msge)
                    if (msge.body == True):
                        ##CALL GET PROPS
                        message.reply("PROPS")
                    if(msge.body == False):
                        message.reply("folder not exists")    
                    else: 
                        message.reply("error")

                EventBus.send("exists.handler", {"uid":uid} , exists_handler)
        else: 
            message.reply("AUTHORISE_FAIL")
    EventBus.send(local_authorize, {"sessionID":sessionID}, authorize_handler)
    

"""
TODO
BUS UTILS 
"""

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
            if (msg == "true"):
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

#register services on eventbus
local_authorize = 'local.authorize'
get_user_id_handler = EventBus.register_handler("get_user_id", handler = get_user_uid)
exists_handler = EventBus.register_handler("exists.handler", handler = get_exists)
local_authorize_handler = EventBus.register_handler(local_authorize, handler = authorize)

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