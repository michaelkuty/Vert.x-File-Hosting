import vertx
from core.file_system import FileSystem

fs = vertx.file_system()
filename = ""

def handler(tid):
   print 'And one second later this is printed %s' % tid
   def delete_handler(err,res):
       if err: print err
       else: print "delete file: %s"% filename

   fs.delete("files/symlink/ASUS_WL-500_manual_cz.pdf",handler=delete_handler)
   print 'timer was planted [ file: %s]'% filename 

def set_one_timer(time, name):
    filename = name
    tid = vertx.set_timer(time, handler)

    