import vertx
from utils import cleaner
from config import config_test

#get config for spec enviroment
config = config_test

logger = vertx.logger()

logger.info("deploy vertx app in python start   ")

#called when deploy finish
def deploy_handler(err, dep_id):
    if err is not None:
        err.printStackTrace()
    else:
        logger.info("%s" %dep_id)
def deploy_mongo(err, dep_id):
    if err is not None:
        err.printStackTrace()
    else:
        def static_handler(err,dep_id):
            if err: logger.info(err.printStackTrace())
            else: logger.info("%s"% dep_id)
        vertx.deploy_verticle('utils/static_data.py', handler=static_handler)
        logger.info("%s"% dep_id)

vertx.deploy_module('io.vertx~mod-mongo-persistor~2.0.0-final', config.mongo, 1,handler=deploy_mongo)

def deploy_auth(err, dep_id):
    if err is not None:
        err.printStackTrace()
    else:
        logger.info("Authorize Manager : %s" %dep_id)

vertx.deploy_module('io.vertx~mod-auth-mgr~2.0.0-final', None, 1,handler=deploy_auth)

#vertx.deploy_module('io.vertx~mod-unzip~1.0.0-final', {"address":"unzip.module"}, 1,handler=deploy_handler)

#main server / route matcher / eventbus
vertx.deploy_verticle('server/server.py', config.main, 1, handler=deploy_handler)

logger.info("load config : %s"% config)
logger.info("webserver config : %s"% config.main)
logger.info("mongopersistor config: %s"% config.mongo)
#logger.info("webserver config: %s"% auth_config)
#cleaner.periodic_cleaner(5000,"files/temp/",".*\.uploaded")
#cleaner.periodic_cleaner(15000,"files/symlink/")
