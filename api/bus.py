import vertx

logger = vertx.logger()

def msg_handler(message):
    logger.info("Got message body %s"% message.body)

#filebane "C:/Users/Michael/Documents/GitHub/vertxapp/files/symlink/te.zip"
#target "C:/Users/Michael/Documents/GitHub/vertxapp/files/temp/firma"
def unzip(filename, target, delete=None):
    def reply_handler(message):
            logger.info("unzip module result:  %s"%message.body)
            if delete: logger.info("zip will be deleted after success unzip")
    logger.info("send unzip message")
    if delete != None:
   	    EventBus.send('unzip.module', {"zipFile": filename,"destDir":target, "deleteZip": delete},reply_handler)
    else: EventBus.send('unzip.module', {"zipFile": filename,"destDir":target},reply_handler)