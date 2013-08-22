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
* handle logout SOLVED
* mkdir SOLVED
* move 
* readprops SOLVED
* update user SOLVED
* rename all files or dir
* link(flag files)
* mongo files


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


