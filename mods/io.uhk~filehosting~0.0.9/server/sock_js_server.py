import vertx
from core.sock_js import SockJSServer
from core.event_bus import EventBus
#from server.bus.messages import bus_messages
from server.bus import bus
from server.bus import bus_utils
from server.bus import mailer
sock_server = vertx.create_http_server()


app_config = vertx.config()
logger = vertx.logger()
bus.path_upload = app_config['paths']['path_private']
bus.path_upload = app_config['paths']['path_private']

def get_or_create(message):
    bus.get_or_create(message)

EventBus.register_handler('get_or_create', handler=get_or_create)

#
def read_dir(message):
    logger.info("read_dir_comment")
    bus.read_dir(message)
EventBus.register_handler('read_dir', handler=read_dir)

def simple_search(message):
    message.body["collection"] = app_config.get("files_collection","files")
    bus.simple_search(message)

EventBus.register_handler('simple_search', handler=simple_search)

def get_auth_user(message):
    message.body["collection"] = app_config.get("users_collection","users")
    bus_utils.get_auth_user(message)

EventBus.register_handler('get_auth_user', handler=get_auth_user)

def registration(message):
    message.body["collection"] = app_config.get("users_collection","users")
    bus_utils.user_save_or_update(message)

EventBus.register_handler('registration', handler=registration)
EventBus.register_handler('update_user', handler=registration)

def exist_in_db(message):
    message.body["collection"] = app_config.get("users_collection","users")
    bus_utils.exist_in_db(message)

EventBus.register_handler('exist_in_db', handler=exist_in_db)

#{sessionID, name}
def mkdir_path(message):
    bus.mkdir_path(message)
EventBus.register_handler('mkdir_path', handler=mkdir_path)

#def get_hostname
def get_hostname(message):
    message.reply("%s://%s"% ("http",app_config['host']))
EventBus.register_handler('get_hostname',handler=get_hostname)

def get_version(message):
    message.reply("%s"% (app_config.get("version", None)))
EventBus.register_handler('get_version', handler=get_version)

def get_file(message):
    bus_utils.get_file(message)
EventBus.register_handler('get_file', handler=get_file)

def send_mail_handler(message):
    body = message.body.get("body", None)
    subject = message.body.get("subject", None)
    email = message.body.get("email", None) #todo save to db
    if (email != None and body != None and len(body) > 10):
        message.body["to"] = app_config.get("admin_mail","kuty.michael@uhk.cz")
        mailer.send_mail(message)
    else: logger.info("short message or wrong params")
EventBus.register_handler('send_mail', handler=send_mail_handler)


#PUBLIC WEB SOCKET ADDRESSES
SockJSServer(sock_server).bridge({"prefix": "/eventbus"}, [{
            'address': 'vertx.basicauthmanager.login'
        },
        {
            'address': 'vertx.basicauthmanager.authorise'
        },
        {
            'address': 'vertx.basicauthmanager.logout'
        },
        {
            'address': 'simple_search'
        },
        {
            'address': 'registration'
        },
        {
            'address': 'read_dir'
        },
        {
            'address': 'mkdir_path'
        },
        {
            'address': 'get_auth_user'
        },
        {
            'address': 'update_user'
        },
        {
            'address': 'get_hostname'
        },
        {
            'address': 'exist_in_db'
        },
        {
            'address': 'get_locale_messages'
        },
        {
            'address': 'get_version'
        },
        {
            'address': 'send_mail'
        },
        {
            'address': 'get_file'
        }], [{}])


sock_server.listen(app_config['port_bridge'])