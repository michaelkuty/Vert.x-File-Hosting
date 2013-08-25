import vertx
from core.event_bus import EventBus
from core.file_system import FileSystem
import bus_utils

logger = vertx.logger()
fs = vertx.file_system()

def msg_handler(message):
    logger.info("Got message body %s"% message.body)

path_upload = "files/private/"
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

#public
#message{collection:collection,matcher:json
#if sessionID else only pulic files
#public:true,false,none
#reply {status:ok, files: []}
def simple_search(message):
    collection = None
    matcher = None
    sessionID = None
    public = None
    collection = message.body.get("collection", None)
    tmp_matcher = message.body.get("matcher", None)
    sessionID = message.body.get("sessionID", None)
    public = message.body.get("public", None)


    #use python $regex
    matcher = {
        "filename": {
            '$regex': tmp_matcher.get("filename"),
            '$options': 'ix'
        },
    }
    logger.info(public)
    if ((sessionID != None) and (collection != None) and (matcher != None)):
        def get_auth_uid(uid):
            if (uid.body == None): message.reply("AUTHORISE_FAIL")
            else:
                userID = uid.body
                logger.info(userID)
                if (public == None):
                    matcher["public"] = True
                else:
                    matcher["userID"] = userID
                    matcher["public"] = False
                def reply_handler(msg):
                    message.reply(msg.body)
                EventBus.send("search",{"collection":collection,"matcher":matcher}, reply_handler)
        EventBus.send("get_auth_uid", {"sessionID":sessionID}, get_auth_uid)
    else:
        matcher["public"] = True
        def reply_handler(msg):
            message.reply(msg.body)
        EventBus.send("search",{"collection":collection,"matcher":matcher}, reply_handler)

#public
#messageJSON{collection:collection:serverSide}
#sessionID
#relative path e.x uid/file.zip or uid/hello
#reply {status:ok, files: [{filename,props}]}
def read_dir(message):
    sessionID = message.body.get("sessionID", None)
    if (sessionID == None): message.reply("sessionID is not valid")
    userID = ""
    def get_auth_uid(uid):
        if (uid.body == None): message.reply("AUTHORISE_FAIL")
        else:
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
            EventBus.send("exists.handler", {"uid":userID} , exists_handler)
    EventBus.send("get_auth_uid", {"sessionID":sessionID}, get_auth_uid)

#public
#messageJSON{collection:collection:serverSide}
#sessionID
#relative path e.x uid/hello
#reply {boolean}
def mkdir_path(message):
    logger.info(message.body)
    try:
        sessionID = message.body.get("sessionID")
    except Exception, e:
        logger.warn("authorize crash %s"% e)
        sessionID = None
    if (sessionID == None): message.reply("sessionID is not valid")
    userID = ""
    def get_auth_uid(uid):
        if (uid.body == None): message.reply("AUTHORISE_FAIL")
        else:
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
    EventBus.send("get_auth_uid", {"sessionID":sessionID}, get_auth_uid)

#register local utils handler
local_authorize = 'local.authorize'
get_user_uid_handler = EventBus.register_handler("get_user_uid", handler = bus_utils.get_user_uid)
exists_handler = EventBus.register_handler("exists.handler", handler = bus_utils.get_exists)
local_authorize_handler = EventBus.register_handler(local_authorize, handler = bus_utils.authorize)
mkdir_handler = EventBus.register_handler("mkdir_handler", handler = bus_utils.mkdir)
read_dir_handler = EventBus.register_handler("read_dir_handler", handler = bus_utils.read_dir)
save_or_update = EventBus.register_handler("save_or_update", handler = bus_utils.user_save_or_update)
get_user_uid_auth = EventBus.register_handler("get_auth_uid", handler = bus_utils.get_auth_uid)
search_handler = EventBus.register_handler("search", handler = bus_utils.search)

