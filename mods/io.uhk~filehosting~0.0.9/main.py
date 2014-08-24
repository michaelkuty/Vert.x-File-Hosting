import vertx
from server.utils import cleaner
from core.file_system import FileSystem
from server.config import config

fs = vertx.file_system()

#get config for spec enviroment
logger = vertx.logger()

logger.info("START-INICIALIZE-FILEHOSTING")

###only create path from config
for env in config.enviroments:
    enabled = env.get("enabled",None)
    if (enabled != None and enabled == True):
        global_config = env
        logger.info("USE %s CONFIG"% env.get("name"))

        paths = env.get("paths")
        def create_upload_dirs(paths):
            for path in paths:
                exist = fs.exists_sync(paths.get(path))
                if not exist:
                    #logger.info("created %s")% paths.get(path)
                    fs.mkdir_with_parents(paths.get(path))

        create_upload_dirs(paths)

def web_server_deploy(err, dep_id):
    if err is not None:
        err.printStackTrace()
    else:
        logger.info("WEB-SERVER-OK on port: %s host: %s uid: %s"% (global_config.get("port",None),global_config.get("host",None),dep_id))
def sock_js_server_deploy(err, dep_id):
    if err is not None:
        err.printStackTrace()
    else:
        logger.info("SOCK-JS-SERVER-OK on port: %s host: %s uid: %s"% (global_config.get("port_bridge",None),global_config.get("host",None),dep_id))
#deploy mongo mod and after load static data by enviroment
def deploy_mongo(err, dep_id):
    if err is not None:
        err.printStackTrace()
    else:
        def static_handler(err,dep_id):
            if err: logger.info(err.printStackTrace())
            else: 
                logger.info("MOD-STATIC-DATA-OK")
        logger.info("STATIC-DATA-START-DEPLOY")
        if (global_config.get("name") == "PRODUCTION"):
            logger.info("PRODUCTION ENVIROMENT")
            vertx.deploy_verticle('server/utils/prod_static_data.py', handler=static_handler)
        elif (global_config.get("name") == "TEST"):
            logger.info("TEST ENVIROMENT")
            vertx.deploy_verticle('server/utils/test_static_data.py', handler=static_handler)
        logger.info("MOD-MONGO-OK uid: %s"% dep_id)
def deploy_auth(err, dep_id):
    if err is not None:
        err.printStackTrace()
    else:
        logger.info("MOD-AUTH-MGR uid: %s" %dep_id)
def deploy_mailer(err, dep_id):
    if err is not None:
        err.printStackTrace()
    else:
        logger.info("MOD-MAILER uid: %s" %dep_id)


#vertx.deploy_module('io.vertx~mod-unzip~1.0.0-final', {"address":"unzip.module"}, 1,handler=deploy_handler)

#main server / route matcher / eventbus
logger.info("WEB-SERVER-START-DEPLOY")
logger.info("MOD-MONGO-START-DEPLOY")
logger.info("MOD-AUTH-MGR-START-DEPLOY")
logger.info("MOD-MAILER-START-DEPLOY")

vertx.deploy_module('io.vertx~mod-mongo-persistor~2.0.0-final', global_config.get("mongodb"), 1,handler=deploy_mongo)
vertx.deploy_module('io.vertx~mod-auth-mgr~2.0.0-final', None, 1,handler=deploy_auth)
vertx.deploy_module('io.vertx~mod-mailer~2.0.0-final', global_config.get("mailer"), 1,handler=deploy_mailer)
vertx.deploy_verticle('server/web_server.py', global_config, 1, handler=web_server_deploy)
vertx.deploy_verticle('server/sock_js_server.py', global_config, 1, handler=sock_js_server_deploy)
vertx.deploy_verticle('server/presenation_server.py', global_config, 1, handler=sock_js_server_deploy)

#logger.info("load config : %s"% config)
#logger.info("webserver config : %s"% config.main)
#logger.info("mongopersistor config: %s"% config.mongo)
#logger.info("webserver config: %s"% auth_config)
#cleaner.periodic_cleaner(5000,"files/temp/",".*\.uploaded")
#cleaner.periodic_cleaner(15000,"files/symlink/")
