import vertx
from core.event_bus import EventBus
from core.file_system import FileSystem
import bus_utils

logger = vertx.logger()
fs = vertx.file_system()

def msg_handler(message):
    logger.info("Got message body %s"% message.body)

path_upload = "files/upload/"
#propagation
bus_utils.path_upload = path_upload

#method get eventbus message from db and get uid directory in global path
#if not exists method create dir with user _id
#if not exist user method reply status
def get_or_create(message):
    username = message.body.get("username")
    #logger.info(username)
    def reply_handler(msg):
        #logger.info(msg.body["result"])
        uid = ""
        if (msg.body.get("result")):
            #try
            uid = msg.body["result"]["_id"]
            def exists_handler(msg):
                #logger.info(msg)
                if (msg.body == True):
                    message.reply(uid)
                if(msg.body == False):
                    def reply_handler(msg):
                         #logger.info(msg.body["result"]["_id"])
                         #TODO call utils mkdir eventbus
                         fs.mkdir(path_upload+uid, perms=None, handler=None)
                         message.reply(uid)
                    EventBus.send('vertx.mongopersistor', {'action': 'findone', 'collection': 'users', 'matcher': {"username":username}}, reply_handler)
                else: message.reply("error")
                #logger.info(msg.body["result"]["_id"])
            EventBus.send("exists.handler", {"uid":uid} , exists_handler)
        else: message.reply("user not exists")
    EventBus.send('vertx.mongopersistor', {'action': 'findone', 'collection': 'users', 'matcher': {"username":username}}, reply_handler)

#mongo result_handler

#message{collection:collection,matcher:{filename:asddasads, "type": xxxx}}
#TODO if user private search on flag result
#reply {status:ok, files: []}
def simple_search(message):
    collection = None
    matcher = None
    try:
        collection = message.body.get("collection")
        tmp_matcher = message.body.get("matcher")
        #use python $regex
        matcher = {
            "filename": {'$regex': tmp_matcher.get("filename")},
        }
    except Exception, e:
        logger.warn("search wrong params")
        collection = None
        matcher = None
    if (collection != None) and(matcher != None):
        def result_handler(msg):
            status = msg.body.get("status")
            if (status == "ok"):
                logger.info(msg.body.get("results"))
                #if (msg.body.get("results") == []): #message.reply("WARN")
                reply = {
                    "status": "ok",
                    "files": {}
                }
                files = []
                for res in msg.body.get("results"):
                    #del res["_id"]
                    files.append(res)
                reply["files"] = files
                message.reply(reply)
            else:
                logger.war("mongo fail %s"% status)
                message.reply(status)
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
    userID = ""
    def authorize_handler(msg):
        if (msg.body != None):
            def get_user_id(uid):
                userID = uid.body
                def exists_handler(msge):
                    #logger.info(msge.body)
                    if (msge.body == True) or (msge.body == False):
                        if (msge.body == True):
                            def read_dir_handler(result):
                                #logger.info(result.body)
                                message.reply(result.body)
                            EventBus.send("read_dir_handler",userID,read_dir_handler)
                        if (msge.body == False): message.reply("no such file or directory")
                    else:
                        message.reply("error")
                EventBus.send("exists.handler", {"uid":uid.body} , exists_handler)
            EventBus.send("get_user_uid", {"username":msg.body}, get_user_id)
        else: 
            message.reply("AUTHORISE_FAIL")
    EventBus.send(local_authorize, {"sessionID":sessionID}, authorize_handler)

def mkdir_path(message):
    logger.info(message.body)
    try:
        sessionID = message.body.get("sessionID")
    except Exception, e:
        logger.warn("authorize crash %s"% e)
        sessionID = None
    if (sessionID == None): message.reply("sessionID is not valid")
    userID = ""
    def authorize_handler(msg):
        if (msg.body != None):
            def get_user_id(uid):
                userID = uid.body
                def exists_handler(msge):
                    #logger.info(msge.body)
                    if (msge.body == True) or (msge.body == False):
                        if (msge.body == True):
                            def mkdir_handler(result):
                                logger.info(result.body)
                                message.reply(result.body)
                            EventBus.send("mkdir_handler",{"userID":userID,"name":message.body.get("name")},mkdir_handler)
                        if (msge.body == False): message.reply("user directory not found")
                    else:
                        message.reply("error")
                EventBus.send("exists.handler", {"uid":uid.body} , exists_handler)
            EventBus.send("get_user_uid", {"username":msg.body}, get_user_id)
        else: 
            message.reply("AUTHORISE_FAIL")
    EventBus.send(local_authorize, {"sessionID":sessionID}, authorize_handler)


#register local utils handler
local_authorize = 'local.authorize'
get_user_uid_handler = EventBus.register_handler("get_user_uid", handler = bus_utils.get_user_uid)
exists_handler = EventBus.register_handler("exists.handler", handler = bus_utils.get_exists)
local_authorize_handler = EventBus.register_handler(local_authorize, handler = bus_utils.authorize)
mkdir_handler = EventBus.register_handler("mkdir_handler", handler = bus_utils.mkdir)
read_dir_handler = EventBus.register_handler("read_dir_handler", handler = bus_utils.read_dir)
save_or_update = EventBus.register_handler("save_or_update", handler = bus_utils.user_save_or_update)
