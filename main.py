import vertx

logger = vertx.logger()

logger.info("vertx in python")

config = {
	"port": 8080,
	"host": "0.0.0.0",
	"path": "files/"
}

mongo_config = {
    "address": "persistor",
    "host": "0.0.0.0",
    "port": 8888,
    "db_name": "test",
    "pool_size": 20
}

def deploy_handler_web_server(err, dep_id):
    if err is not None:
        err.printStackTrace()
    else:
        print "web server been deployed! %s" %dep_id

vertx.deploy_module('io.vertx~mod-mongo-persistor~2.0.0-final', mongo_config, 1)

vertx.deploy_verticle('server/upload.py', config)
print config
