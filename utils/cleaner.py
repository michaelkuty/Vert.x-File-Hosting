import vertx
from core.file_system import FileSystem
from core.http import MultiMap

fs = vertx.file_system()

#one shot timer
#@params time
#@params path relative or absolute
def set_one_timer(time, path):
    def handler(tid):
       def delete_handler(err,res):
           if err: print res
           print "file %s was deleted"% path
       fs.delete(path,handler=delete_handler)
    tid = vertx.set_timer(time, handler)

#periodic cleaner
#@params time
#@params path
#@params file_filter
def periodic_cleaner(time, path,file_filter=None):
    def periodic_cleaner_handler(tid):
        def handler(err,res):
            if not err:
                for result in res:
                    def delete_handler(err,res):
                        if err: print res
                    fs.delete(result, handler=delete_handler)
                    print "delete %s files type: %s from %s"% (len(res),path,file_filter)
            else: print err
        if file_filter == None:
            fs.read_dir(path, handler=handler)
        else: fs.read_dir(path, file_filter, handler=handler)
    tid = vertx.set_periodic(time, handler=periodic_cleaner_handler)    
