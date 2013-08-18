import vertx
from core.event_bus import EventBus

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

def reply_handler2(message):
    print ("hovna")
    print (message.body)

print ("hovna")

def reply_handler3(msg):
    print 'Received reply %s' % msg.body

EventBus.send('vertx.mongopersistor', {'action': 'find', 'collection': 'users', 'matcher': {}}, reply_handler3)

def create_dir(username):
    EventBus.send('vertx.mongopersistor', {'action': 'find', 'collection': 'users', 'matcher': {}}, reply_handler2)

def db_stats(collection):
    def reply_handler1(message):
        logger.info("message.body")
        logger.info(message.body)
    message = {
        'action': 'collectionStats',
        'collection': 'users'
    }
    logger.info("send message")
    EventBus.send('vertx.mongopersistor', message ,reply_handler1)