import vertx
from core.event_bus import EventBus

logger = vertx.logger()

smtp_address = "mailer"

#TODO separation of constatns
def send_mail(message):
    subject = message.body.get("subject", None)
    body = message.body.get("body", None)
    to = message.body.get("to", None)
    email = message.body.get("email", None)
    if (body == None): message.reply("body not specifed")
    if (subject == None): subject = "Filehosting"
    if (to == None): to = "kuty.michael@uhk.cz"
    def reply_status(msg):
        message.reply(msg.body) #TODO rich reply
    if (email == None):
        EventBus.send(smtp_address, {"from": "filehosting@filehosting.cz","to": to, "subject":subject,"body":body}, reply_status)
    else:
        def reply_handler(msg):
            logger.info("save email %s %s"% (message.body,msg.body))
        EventBus.send('vertx.mongopersistor', {'action': 'save', 'collection': 'emails',"document": message.body}, reply_handler)
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

#TODO LINK MAIL
#TODO FORGOT PASS MAIL

#TODO propagation upstairs
#send_mail = EventBus.register_handler("send_mail", handler = send_mail)
registration_mail = EventBus.register_handler("registration_mail", handler = registration_mail)