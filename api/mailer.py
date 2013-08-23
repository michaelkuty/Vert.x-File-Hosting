import vertx
from core.event_bus import EventBus
from bus_utils import get_user_uid

logger = vertx.logger()

smtp_address = "mailer"
##TODO collection email_model in db with html template
##TODO API
def mailer_handler(msg):
    logger.info(msg.body)
    EventBus.send("mailer",{"from": "hovnaa@hovnaa.cz", "to": "6du1ro.n@gmail.com","subject": "Congratulations on your new armadillo!",
"body": "Dear Bob, great to here you have purchased......"}, mailer_handler)


#TODO mailer address
def send_mail(message):
    subject = message.body.get("subject", None)
    body = message.body.get("body", None)
    to = message.body.get("to", None)
    if (body == None): message.reply("body not specifed")
    if (subject == None): message.reply("subject not specifed")
    if (to == None): message.reply("to not specifed")
    def reply_status(msg):
        message.reply(msg.body) #TODO rich reply
    EventBus.send(smtp_address, {"from": "filehosting@filehosting.cz","to": to, "subject":subject,"body":body}, reply_status)

#public
#{user}
#TODO template
def registration_mail(message):
    user = message.body.get("user", None)
    if (user == None): message.reply("user not specifed")
    else: 
        mail = {
            "to": user.get("email"),
            "body": "Thank you for registration %s please follow http://master.majklk.cz"% user.get("username"),
            "subject": "registration filehosting"
        }
        def reply(msg):
            message.reply(msg.body) #TODO rich reply
        EventBus.send("send_mail",mail,reply)
#TODO propagation upstairs
send_mail = EventBus.register_handler("send_mail", handler = send_mail)
registration_mail = EventBus.register_handler("registration_mail", handler = registration_mail)