## vertxapp LIVE DEMO - http://master.majklk.cz
========

###TODO
* automatic css for gridster widget SOLVED
* update form + validation SOLVED
* rewrite client to english or two languages support and translate dictionary on server 
* forgot pass mail form LOW
* check boxs for public private and both searchs HIGHT
* call user_exist_in_db on registration form HIGHT SOLVED
* move 
* handle logout SOLVED
* rename all files or dir
* link(flag files)
* mongo files
* save props with upload file SOLVED


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

config_mailer = {
    "address": "mailer",
    "host": "smtp.googlemail.com",
    "port": 465,
    "ssl": True,
    "auth": True,
    "username": "xxx",
    "password": "xxx"
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
*reply {status:ok, files: []}

### def read_dir(message):
* public
* messageJSON{
* collection:collection:serverSide}
* sessionID
* relative path e.x uid/file.zip or uid/hello
* reply {status:ok, files: [{filename,props}]}

### def get_user(message):
* message{sessionID:sessionID}
* reply JSON{user}

//todo rename save_or_update
### def registration(message):
* message user:JSON
* * if user._id == update !!!
* reply _id String

###def mkdir_path(message):
* public
* messageJSON
* collection:collection:serverSide
* sessionID
* relative path e.x uid/hello
* reply JSON{boolean}

###def user_exist_in_db(message):
* public
* collection:serverSide
* username
* reply JSON{boolean}

file_document = {
    "filename": filename,
    "size": size,
    "ext": file_type
    "content_transfer_encoding": content_transfer_encoding,
    "charset": charset,
    "create_time": ('%Y-%m-%d %H:%M:%S'),
    "public": boolean,
    if private "userID":uid
    }

### Mailers 
simple smtp mail sender, load model mail from db and add custom text with link on file and send to addresTo
header, main, foter 
main is body from client (link, Welcome or ex.)

### Prace se soubory
Ukladame soubory do files/<user-id>/<libovolna-struktura>/soubor.ext.
DB záznam? tvar {filename:'soubor',ext:'ext',userID:'asdsadassdad',content:'image/jpeg',public:'1',dir:'mojeslozka/dokumenty/'}
Nahrané soubory bych nechal implicitně public s možností změny potom (případně globální změny implicitiní hodnoty pak v nastavení).

?Budou moci nahrávat i nepřihlášení uživatelé? Pokud ano, asi bych nechal userID prazdne a nahraval do nějakého speciálního adresáře (public).
Ty by potom mohli po měsíci mizet (není priorita), u přihlášených souborů bych vůbec zatím nemazal.
DL servisa se pak rozhodne co použít jak složit link.

### Odkazování souborů
Skutečné umístění bych vůbec nepropagoval, jestli je ta možnost vracet přímo soubor (nevím jestli to umí Jython).
DL linky by tedy byli něco jako: http://www.filehosting.pro3/dl/sadasfsfasfasfdgriuhiuhgigiaguz4668
Případně nepoužívat ID souboru, ale jinde ten údaj nevyužijeme.
DL servisa vrátí přímo file, který najde podle IDčka v databázi.
Vysral bych se na symlinky osobně, jenom to komplikují, sdílení veřejných souborů odkazem půjde implicitně vždy.
To je klasickej přístup všech filehostingů a případně můžeme "naučit" tu dl-servisu aby uměla vygenerovat nějakej hezčí link.
Něco jako: http://www.filehosting.pro/dl/1234546-muj-soubor.rar, jenže zas kde brát unikátnost pokud nemáme klasické IDčka.


