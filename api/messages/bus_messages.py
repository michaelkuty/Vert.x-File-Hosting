#-*- coding: utf-8 -*-
messages = {
	"CZ": {
	    "messages.login": u"Přihlášení",
	    "messages.registration": u"Registrace",
	    "messages.logout": u"Odhlášení",
	    "messages.profil": u"Profil",
	    "messages.search": u"Vyhledávání",
	    "messages.upload": u"Nahrát soubory"
	},
	"EN": {
	    "messages.login": u"Login",
	    "messages.registration": u"Registration",
	    "messages.logout": u"Logout",
	    "messages.profil": u"Profil",
	    "messages.search": u"Vyhledávání",
	    "messages.upload": u"Nahrát soubory"
	}
}

#{locale:EN}
def get_locale_messages(message):
    locale = message.body.get("locale", None)
    if locale:
    	locale_msgs = messages.get(locale, None)
        if locale_msgs:
        	message.reply(locale_msgs)