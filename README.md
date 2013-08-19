## vertxapp
========

simple file upload written in javascipt, java and python

* start with main.py 

* config = {
    "port": 8888,
    "host": "0.0.0.0",
    "path_web": "web/",
    "path_upload": "files/upload/",
    "path_temp": "files/temp/",
    "path_symlink": "files/symlink/"
}
* path for e.x: files/temp/

* mongo_config = {
    "address": "persistor",
    "host": "0.0.0.0",
    "port": 8888,
    "db_name": "test",
    "pool_size": 20
}


## EventBus API

* get_or_create_dir
** message {username : username}
** reply String uid (path to users directory)

* read_dir
** message {path : uid}
** reply JSON {}
