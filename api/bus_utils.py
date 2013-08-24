import vertx
from core.event_bus import EventBus
from core.file_system import FileSystem
import time

logger = vertx.logger()
fs = vertx.file_system()

mongopersistor_address = 'vertx.mongopersistor'

path_upload = "files/private/"

#reply Object {}
#PUBLIC
def get_user(message):
    def reply_handler(msg):
        #logger.info(msg.body)
        #logger.info(msg.body.get('result'))
        try:
            del msg.body['result']['password']
        except Exception, e:
            message.reply(None)
        else:
            message.reply(msg.body['result'])
            
    EventBus.send(mongopersistor_address, {'action': 'findone', 'collection': 'users', 'matcher': {"_id":message.body.get("userID")}}, reply_handler)

#return username or None
#PRIVATE
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
# todo rewrite to complete path
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

#PUBLIC
def get_user_uid(message):
    def reply_handler(msg):
        #logger.info(msg.body["result"]["_id"])
        uid = ""
        try:
            uid = msg.body["result"].get("_id")
        except Exception, e:
            uid = None
            message.reply(None)
        else:
            message.reply(uid)
            
    EventBus.send('vertx.mongopersistor', {'action': 'findone', 'collection': 'users', 'matcher': {"username":message.body.get("username")}}, reply_handler)

#PRIVATE from sessionID reply user uid
def get_auth_uid(message):
    def authorize_handler(msg):
        if (msg.body != None):
            def get_user_id(uid):
                if (uid.body != None):
                    message.reply(uid.body)
                else: message.reply(None)
            EventBus.send("get_user_uid", {"username":msg.body}, get_user_id)
        else: 
            message.reply("AUTHORISE_FAIL")
    EventBus.send("local.authorize", {"sessionID":message.body.get("sessionID")}, authorize_handler)

#PUBLIC
#collection
#username
#reply {boolean}
def user_exist_in_db(message):
    username = message.body.get("username", None)
    def reply_handler(msg):
        res = msg.body.get("result", None)
        if (res != None):
            message.reply(True)
        else:
            message.reply(False)
    if (username != None):
        EventBus.send('vertx.mongopersistor', {'action': 'findone', 'collection': message.body.get("collection"), 'matcher': {"username":username}}, reply_handler)
    else: 
        message.reply("wrong param name")
#PUBLIC
#collection
#email
#reply {boolean}
def email_exist_in_db(message):
    email = message.body.get("email", None)
    def reply_handler(msg):
        res = msg.body.get("result", None)
        if (res != None):
            message.reply(True)
        else:
            message.reply(False)
    if (email != None):
        EventBus.send('vertx.mongopersistor', {'action': 'findone', 'collection': message.body.get("collection"), 'matcher': {"email":email}}, reply_handler)
    else: 
        message.reply("wrong param email")

#simple unzip
def unzip(filename, target, delete=None):
    def reply_handler(message):
            logger.info("unzip module result:  %s"%message.body)
            if delete: logger.info("zip will be deleted after success unzip")
    logger.info("send unzip message")
    if delete != None:
           EventBus.send('unzip.module', {"zipFile": filename,"destDir":target, "deleteZip": delete},reply_handler)
    else: EventBus.send('unzip.module', {"zipFile": filename,"destDir":target},reply_handler)

#PRIVATE
def mkdir(message):
    def check_exist(msg):
        def reply_handler(err,res):
            #logger.info(msg.body["result"]["_id"])
            if not err:
            	message.reply(True)
            else: message.reply(False)
        if (msg.body != None or True):
            fs.mkdir_with_parents(path_upload+message.body.get("userID")+"/"+message.body.get("name"), perms=None, handler=reply_handler)
        else: message.reply(None)
    EventBus.send("exists.handler", {"uid":path_upload+message.body.get("userID")+message.body.get("name")},check_exist)
#only sync :-(
def read_dir(message):
    #logger.info("heeloo %s"% message.body)
    name = "%s%s"% (path_upload,message.body)
    def reply_handler(err,result):
        if not err:
            reply = {
                    "status": "ok",
                    "files": {}
                }
            files = []
            if (len(result) != 0):
                for res in result:
                    props = fs.props_sync(res)          
                    props_ = {
                        #"creation_time":props.creation_time().time(),
                        #"last_access_time": props.last_access_time,
                        #"last_modify_time": props.last_modify_time,
                        "directory": str(props.directory),
                        "regular_file": str(props.regular_file),
                        "symbolic_link": str(props.symbolic_link),
                        "size": props.size,
                    }
                    if not (props.directory):
                        props_["type"] = res.split(message.body)[1].split(".")[len(res.split(message.body)[1].split("."))-1]
                    else: props_["type"] = "dir"
                    #logger.info(props_)
                    one_file = {
                        "filename": res.split(message.body)[1][:1],
                        "props": props_
                    }
                    files.append(one_file)
                #logger.info(files)
                reply["files"] = files
                #logger.info(reply)
                message.reply(reply)
            else: logger.info(None)
    fs.read_dir(name, handler=reply_handler)
    
#{collection:String,user:Object}
def user_save_or_update(message):
    user = message.body.get("user", None)
    if 'password2' in user: del user['password2']
    #logger.info(user)
    def user_existss(msg):
        #logger.info(msg.body)
        if (msg.body == None):
            #logger.info(msg.body)
            def save_result_handler(msg):
                def reply(res):
                    logger.info(res.body)
                EventBus.send("registration_mail",{"user":user},reply)
                message.reply(msg.body.get("_id"))
            EventBus.send("vertx.mongopersistor",{"action":"save", "collection":message.body.get("collection"), "document": user},save_result_handler)
        else: 
            #TODO upsert create new document when 0 result from criteria :-)
            update = {"action":"update", "collection": message.body.get("collection"),
                "criteria": {"_id": msg.body},
                "objNew" : user,
                "upsert": False,
                "multi": False
            }
            def update_result_handler(msg):
                message.reply(msg.body)
            EventBus.send("vertx.mongopersistor",update,update_result_handler)
    EventBus.send("get_user_uid", {"username": user.get("username")}, user_existss)

#PRIVATE
#message{collection:collection,matcher:{filename:asddasads, "type": xxxx}}
def search(message):
    collection = message.body.get("collection")
    matcher = message.body.get("matcher")
    if (collection != None) and (matcher != None):
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
