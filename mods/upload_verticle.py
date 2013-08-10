import random
import string
from datetime import datetime

import vertx
from core.file_system import FileSystem
from core.streams import Pump

server = vertx.create_http_server()

fs = vertx.file_system()

@server.request_handler
def request_handler(req):
    req.pause()

    filename = ''
    for i in range(10):
        filename += string.uppercase[random.randrange(26)]
    filename += '.uploaded'

    print "Got request storing in %s"% filename

    def file_open(err, file):
        pump = Pump(req, file)
        start_time = datetime.now()

        def end_handler():
            def file_close(err, file):
                end_time = datetime.now()
                print "Uploaded %d bytes to %s in %s"%(pump.bytes_pumped, filename, end_time-start_time)
                req.response.end()
            file.close(file_close)
        req.end_handler(end_handler)
        pump.start()
        req.resume()

    fs.open(filename, handler=file_open)

server.listen(8081)