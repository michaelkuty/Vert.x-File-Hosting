## vertxapp
========

simple file upload written in javascipt, java and python

* start with main.py 

* config = {
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
* path for e.x: files/temp/

* mongo_config = {
    "address": "persistor",
    "host": "0.0.0.0",
    "port": 8888,
    "db_name": "test",
    "pool_size": 20
}


## EventBus API

### def get_or_create(message):
* message = {username:username}

### def read_dir(message):
* message = {sessionID:sessionID}
* reply String userID


### def simple_search(message):
* message{matcher:{filename:asddasads, "type": xxxx}}
* reply {status:ok, files: []}

### def get_user(message):
* message{sessionID:sessionID}
* reply Object {user}

### def registration(message):
* message{user:{Object}}
* reply _id


###TODO
*handle logout SOLVED
*mkdir
*move
*readprops
*update user
*rename all files or dir
*link(flag files)
*mongo files
