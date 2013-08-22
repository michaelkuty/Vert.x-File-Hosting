﻿## vertxapp
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

def simple_search(message):
* public
* message
* sessionID
* collection:collection
* matcher:json
** filename
** TODO content-type
** public:true,false,none (PRIVATE/PUBLIC/BOTH)
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
* reply Object {user}

### def registration(message):
* message{user:{Object}}
* reply _id

###def mkdir_path(message):
#public
#messageJSON{
#collection:collection:serverSide
#sessionID
#relative path e.x uid/hello
#}
#reply {boolean}

#public
#collection:serverSide
#username
#reply {boolean}

###TODO
* handle logout SOLVED
* mkdir SOLVED
* move 
* readprops SOLVED
* save user with validation SOLVED
* update user
* rename all files or dir
* link(flag files)
* mongo files
* save props with upload file SOLVED
* check boxs for public private and both searchs

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


