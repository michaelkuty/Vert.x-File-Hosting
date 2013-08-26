import vertx
from core.event_bus import EventBus
from core.file_system import FileSystem
import time
from server.bus import mailer
logger = vertx.logger()
fs = vertx.file_system()

mongopersistor_address = 'vertx.mongopersistor'

path_upload = "files/private/"

#{userID}
#reply USER JSON{} without pass
#PRIVATE
#YOU MUST REGISTER THIS METHOD!
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

#PUBLIC
#{sessionID:sessionID}
#reply None, USER
#these method register own eb.method get user which call DB
def get_auth_user(message):
    sessionID = message.body.get("sessionID", None)
    if sessionID != None:
        def get_auth_uid(uid):
            if (uid.body == None): message.reply(None)
            else:
                userID = uid.body
                get_user_eb = EventBus.register_handler("get_user_private", handler = get_user)
                def user_handler(user):
                    message.reply(user.body)
                    EventBus.unregister_handler(get_user_eb)
                EventBus.send("get_user_private", {"userID":userID}, user_handler)
        EventBus.send("get_auth_uid", {"sessionID":sessionID}, get_auth_uid)
    else:message.reply(None)
    
#PUBLIC
#sessionID
#reply None, username
def authorize(message):
    def authorise_handler(msg):
        if (msg.body.get("status") == "ok"):
            message.reply(msg.body.get("username"))
        else: message.reply(None)
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
        uid = None
        try:
            uid = msg.body["result"].get("_id")
        except Exception, e:
            uid = None
        #logger.info(msg.body["result"]["_id"])
        if (uid == None):
            message.reply(None)
        elif (uid != None): message.reply(uid)
        else: logger.info("get_user_uid error in result" )          
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
            message.reply(None)
    EventBus.send("local.authorize", {"sessionID":message.body.get("sessionID")}, authorize_handler)

#PUBLIC
#collection
#username
#reply {boolean}
def exist_in_db(message):
    key = message.body.get("key", None)
    value = message.body.get("value", None)
    def reply_handler(msg):
        res = msg.body.get("result", None)
        if (res != None):
            message.reply(True)
        else:
            message.reply(False)
    if (key != None and value != None):
        EventBus.send('vertx.mongopersistor', {'action': 'findone', 'collection': message.body.get("collection"), 'matcher': {key:value}}, reply_handler)
    else: 
        message.reply(False)

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

#{username,pass}
def login_user(message):
    username = message.body.get("username", None)
    password = message.body.get("password", None)
    if (username != None) and (password  != None):
        def login_handler(msg):
            if msg.body.get("status") == "ok":
                message.reply(msg.body.get("sessionID"))
            else:
                message.reply(False)
        EventBus.send("vertx.basicauthmanager.login", {"username":username,"password":password}, login_handler)      
 
EventBus.register_handler("login_user", handler = login_user)

#{collection:String,user:Object}
#reply sessionID
def user_save_or_update(message):
    user = message.body.get("user", None)
    if 'password2' in user: del user['password2']
    #logger.info(user)
    def user_existss(msg):
        #logger.info(msg.body)
        if (msg.body == None):
            #logger.info(msg.body)
            def save_result_handler(msg):
                def login(login):
                    if "password" in user: del user["password"]
                    message.reply({"user":user,"sessionID":login.body}) 
                def reply(res):
                    logger.info(res.body)
                EventBus.send("login_user", {"username":user.get("username"),"password":user.get("password")}, login)
                EventBus.send("registration_mail",{"user":user},reply)
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
                message.reply(user.get('_id'))
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
