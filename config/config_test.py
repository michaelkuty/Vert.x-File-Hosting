"""
GLOBAL config
"""
main = {
    "port": 8888,
    "port_bridge": 8889,
    "host": "0.0.0.0",
    "path_web": "web/",
    "path_upload": "files/upload/",
    "path_temp": "files/temp/",
    "path_symlink": "files/symlink/",
    "files_collection": "files",
    "users_collection": "users"
}

mongopersistor_address = "vertx.mongopersistor"

"""
mongo db persistor 
ligh vrstva EB || Mongo db server
"""
mongo = {
    "address": mongopersistor_address,
    "host": "localhost",
    "port": 27017,
    "db_name": "default_db",
    "pool_size": 20,
    "fake": True
}

"""
default
zatim None
"""
auth = {
    "address": "vertx.basicauthmanager.login",
    "user_collection": "users",
    "persistor_address": mongopersistor_address,
    "session_timeout": 900000
}