import vertx
from core.event_bus import EventBus

##TODO collection email_model in db with html template
##TODO API
def mailer_handler(msg):
    logger.info(msg.body)
EventBus.send("mailer",{"from": "hovnaa@hovnaa.cz", "to": "6du1ro.n@gmail.com","subject": "Congratulations on your new armadillo!",
"body": "Dear Bob, great to here you have purchased......"}, mailer_handler)