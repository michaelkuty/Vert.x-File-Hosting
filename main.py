import vertx

logger = vertx.logger()

logger.info("vertx in python")

config = {
	"port": 8080,
	"host": "0.0.0.0",
	"path": "files/"
}

def deploy_handler_web_server(err, dep_id):
    if err is not None:
        err.printStackTrace()
    else:
        print "web server been deployed! %s" %dep_id

#vertx.deploy_module('io.vertx~mod-web-server~2.0.0-final', webconfig, 32, deploy_handler_web_server)
vertx.deploy_verticle('server/upload.py', config)
print config
