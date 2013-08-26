## vertxapp LIVE DEMO - http://master.majklk.cz
========

![vertx](https://0.gravatar.com/avatar/801d7eaea86a4bb5f8a58ef86041f56e?d=https%3A%2F%2Fidenticons.github.com%2F94ff688120f54501e463d0ddcc075542.png&s=420)

![mongodb](http://media.mongodb.org/logo-mongodb.png)

![angular](http://www.airpair.com/images/tech/angularjs.jpeg)

### Main config - WEB server SockJS server MONGO connection

    {
        "name": "PRODUCTION",
        "enabled": True,
        "version": "0.0.0",
        "port": 80,
        "port_bridge": 8889,
        "host": "localhost",
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
        "files_collection": <files>,
        "users_collection": <users>
        "mailer": {
            "address": "mailer",
            "host": "smtp.googlemail.com",
            "port": 465,
            "ssl": True,
            "auth": True,
            "username": <username>,
            "password": <password>,
            "content-type": "text/html"
        }
    }
    
## EventBus API

### def simple_search(message):
* public
* message
* sessionID = nullable
* collection:collection
* matcher:json
* * filename
* * TODO content-type
* * public:true,false,none (PRIVATE/PUBLIC/BOTH)
* `reply {status:ok, files: []}`

### def read_dir(message):
* public
* `messageJSON`
* collection:collection:serverSide}
* sessionID
* relative path e.x uid/file.zip or uid/hello
* `reply {status:ok, files: [{filename,props}]}`

### def get_user(message):
* `message{sessionID:sessionID}`
* reply JSON{user}

//todo rename save_or_update
### def registration(message):
* `message user:JSON`
* * if user._id == update !!!
* `method register && login`
* `reply {sessionID:sessionID,user:user(JSON)}`

###def mkdir_path(message):
* public
* `messageJSON`
* collection:collection:serverSide
* sessionID
* relative path e.x uid/hello
* `reply JSON{boolean}`

###def user_exist_in_db(message):
* public
* collection:serverSide
* username
* `reply JSON{boolean}`

###TODO
* client messages (locale)
* forgot pass mail form LOW
* move 
* rename all files or dir
* link(flag files) PUBLIC link to private files 
* `mongo files` 
