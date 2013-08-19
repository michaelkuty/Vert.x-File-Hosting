import vertx
from core.event_bus import EventBus
from core.file_system import FileSystem

logger = vertx.logger()

def get_user(message):
    def reply_handler(msg):
        logger.info(msg.body["result"]["_id"])
        message.reply(msg.body["result"])
    EventBus.send('vertx.mongopersistor', {'action': 'findone', 'collection': 'users', 'matcher': {"_id":message.body.get("userID")}}, reply_handler)
