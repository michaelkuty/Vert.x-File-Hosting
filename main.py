import vertx
from utils import cleaner

logger = vertx.logger()

logger.info("vertx in python")

config = {
    "port": 8888,
    "host": "0.0.0.0",
    "path_web": "web/",
    "path_upload": "files/upload/",
    "path_temp": "files/temp/",
    "path_symlink": "files/symlink/"
}

mongo_config = {
    "address": "vertx.mongopersistor",
    "host": "0.0.0.0",
    "port": 8888,
    "db_name": "test",
    "pool_size": 20
}

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

vertx.deploy_module('io.vertx~mod-mongo-persistor~2.0.0-final', None, 1,handler=deploy_mongo)
#vertx.deploy_module('io.vertx~mod-unzip~1.0.0-final', {"address":"unzip.module"}, 1,handler=deploy_handler)

#main server / route matcher / eventbus
vertx.deploy_verticle('server/server.py', config, 1, handler=deploy_handler)

logger.info("webserver config: %s"% config)
logger.info("mongopersistor config: %s"% mongo_config)
#cleaner.periodic_cleaner(5000,"files/temp/",".*\.uploaded")
#cleaner.periodic_cleaner(15000,"files/symlink/")
