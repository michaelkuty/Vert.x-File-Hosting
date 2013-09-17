#INITIAL service for register and unregister handlers
import vertx
from core.event_bus import EventBus

from api import bus_utils

public_actions = {
	"api": {
		"bus_utils": {
			"simple_search":"simple_search",
			"registration":"registration",
		}
	}
}

def register_(public_actions):
	for package in public_actions:
		for module in package:
			#TODO IMPORT HERE
			for action in module:
				def reply(msg):
					logger.info(msg.body)
				EventBus.send("register_method",{"address:action","method":method,"module":module}, reply)

#{address,method,package}
def register_method(message):
	address = message.body.get("address", None)
	method = message.body.get("method", None)
	module = message.body.get("module", None)
	if (address != None and method != None and module != None):
		EventBus.register_handler(address, "%s.%s"% (module,method))
	else: 
		message.reply("register_method missing address or method or module")

register_method = EventBus.register_handler("register_method", handler= register_method)

