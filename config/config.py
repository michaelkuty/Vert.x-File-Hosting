"""
GLOBAL config
"""
enviroments = [
    {
        "name": "production",
        "enabled": True,
        "version": "0.9.0",
        "port": 80,
        "port_bridge": 8889,
        "host": "http://master.majklk.cz",
        "paths": {
            "web": "web/",
            "path_private":"files/private/",
            "path_symlink":"files/symlink/",
            "path_temp":"files/temp/",
            "path_public":"files/public/"
        },
        "mongodb": {
            "address": "vertx.mongopersistor",
            "host": "localhost",
            "port": 27017,
            "db_name": "default_db",
            "pool_size": 20,
        },
        "mailer": {
            "address": "mailer",
            "host": "smtp.googlemail.com",
            "port": 465,
            "ssl": True,
            "auth": True,
            "username": "kuty@koncepthk.cz",
            "password": "MKmk+987",
            "content-type": "text/html"
        },
        "files_collection": "files",
        "users_collection": "users"
    },
    {
        "name": "TEST",
        "enabled": True,
        "version": "0.9.0",
        "port": 8888,
        "port_bridge": 8889,
        "host": "0.0.0.0",
        "paths": {
            "web": "web/",
            "path_private":"files/private/",
            "path_symlink":"files/symlink/",
            "path_temp":"files/temp/",
            "path_public":"files/public/"
        },
        "mongodb": {
            "address": "vertx.mongopersistor",
            "host": "localhost",
            "port": 27017,
            "db_name": "default_db",
            "pool_size": 20,
        },
        "mailer": {
            "address": "mailer",
            "host": "smtp.googlemail.com",
            "port": 465,
            "ssl": True,
            "auth": True,
            "username": "kuty@koncepthk.cz",
            "password": "MKmk+987",
            "content-type": "text/html"
        },
        "files_collection": "files",
        "users_collection": "users"
    }
]
mongopersistor_address = "vertx.mongopersistor"

"""
mongo db persistor 
ligh vrstva EB || Mongo db server
"""


"""
default
zatim None
"""
auth = {
    "address": "vertx.basicauthmanager.login",
    "user_collection": "users",
    "persistor_address": mongopersistor_address,
    "session_timeout": 30000
}
