import vertx
from server.utils import cleaner
from config import config_test
from config import mailer_prod
from core.file_system import FileSystem
fs = vertx.file_system()
#get config for spec enviroment
config = config_test

logger = vertx.logger()

logger.info("deploy vertx app in python start   ")

###only create path from config
paths = config.main.get("paths")

def create_upload_dirs(paths):
    for path in paths:
        exist = fs.exists_sync(paths.get(path))
        if not exist:
            #logger.info("created %s")% paths.get(path)
            fs.mkdir_with_parents(paths.get(path))

create_upload_dirs(paths)



#TODO rewrite this module

#called when deploy finish
def web_server_deploy(err, dep_id):
    if err is not None:
        err.printStackTrace()
    else:
        logger.info("WEB-SERVER-OK on port: %s host: %s uid: %s"% (config.main.get("port",None),config.main.get("host",None),dep_id))

vertx.deploy_verticle('server/server.py', config.main, 1, handler=web_server_deploy)

##############################################MONGO#######################################################
def deploy_mongo(err, dep_id):
    if err is not None:
        err.printStackTrace()
    else:
        def static_handler(err,dep_id):
            if err: logger.info(err.printStackTrace())
            else: 
                logger.info("MOD-STATIC-DATA-OK")
        logger.info("STATIC-DATA-START-DEPLOY")
        vertx.deploy_verticle('server/utils/static_data.py', handler=static_handler)
        logger.info("MOD-MONGO-OK uid: %s"% dep_id)

vertx.deploy_module('io.vertx~mod-mongo-persistor~2.0.0-final', config.mongo, 1,handler=deploy_mongo)
##############################################AUTH#######################################################
def deploy_auth(err, dep_id):
    if err is not None:
        err.printStackTrace()
    else:
        logger.info("MOD-AUTH-MGR uid: %s" %dep_id)

vertx.deploy_module('io.vertx~mod-auth-mgr~2.0.0-final', None, 1,handler=deploy_auth)

##############################################MAILER#######################################################
def deploy_mailer(err, dep_id):
    if err is not None:
        err.printStackTrace()
    else:
        logger.info("MOD-MAILER uid: %s" %dep_id)

vertx.deploy_module('io.vertx~mod-mailer~2.0.0-final', mailer_prod.config, 1,handler=deploy_mailer)
###########################################################################################################

#vertx.deploy_module('io.vertx~mod-unzip~1.0.0-final', {"address":"unzip.module"}, 1,handler=deploy_handler)

#main server / route matcher / eventbus
logger.info("WEB-SERVER-START-DEPLOY")
logger.info("MOD-MONGO-START-DEPLOY")
logger.info("MOD-AUTH-MGR-START-DEPLOY")
logger.info("MOD-MAILER-START-DEPLOY")

#logger.info("load config : %s"% config)
#logger.info("webserver config : %s"% config.main)
#logger.info("mongopersistor config: %s"% config.mongo)
#logger.info("webserver config: %s"% auth_config)
#cleaner.periodic_cleaner(5000,"files/temp/",".*\.uploaded")
#cleaner.periodic_cleaner(15000,"files/symlink/")
