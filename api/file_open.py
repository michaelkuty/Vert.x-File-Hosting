def file_open(err, file):
        pump = Pump(req, file)
        start_time = datetime.now()

        def end_handler():
            def file_close(err, file):
                end_time = datetime.now()
                logger.info("Uploaded %d bytes to %s in %s"%(pump.bytes_pumped, filename, end_time-start_time))
                req.response.chunked = True
                req.response.status_code = 201
                req.response.status_message = "File uploaded"
                res = "{\"result\":\"%s\"\"size\":\"%s\"}"% ("ok",pump.bytes_pumped)
                req.response.put_header("Content-Type","application/json")
                req.response.end(res)
            file.close(file_close)
        req.end_handler(end_handler)
        pump.start()
        req.resume()

    fs.open(filename, handler=file_open,create_new=True,flush=True)