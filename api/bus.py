def msg_handler(message):
    print "Got message body %s"% message.body

#filebane "C:/Users/Michael/Documents/GitHub/vertxapp/files/symlink/te.zip"
#target "C:/Users/Michael/Documents/GitHub/vertxapp/files/temp/firma"
def unzip(filename, target, delete=None):
    def reply_handler(message):
            print "unzip module result:  %s"%message.body
            if delete: print "zip will be deleted after success unzip"
    print "send unzip message"
    if delete != None:
   	    EventBus.send('unzip.module', {"zipFile": filename,"destDir":target, "deleteZip": delete},reply_handler)
    else: EventBus.send('unzip.module', {"zipFile": filename,"destDir":target},reply_handler)