var vertx = require('vertx')
var console = require('vertx/console')

configUpload = {
  'port': 8888,
  'path': 'C:/Users/Michael/Documents/GitHub/file-hosting/app/files/',
  'hostname': "localhost"
}

var config = configUpload;
var server = vertx.createHttpServer();
//console.log("Config is " + JSON.stringify(config));
var routeMatcher = new vertx.RouteMatcher();
var options = {
  accessControl: {
    allowOrigin: '*',
    allowMethods: 'OPTIONS, HEAD, GET, POST, PUT, DELETE'
  }
}

routeMatcher.get('..', function(req) {
  req.response.sendFile("web/" + req.path());
});

routeMatcher.get('/', function(req) {
  req.response.sendFile("web/index.html");
});

routeMatcher.get('.zk.html', function(req) {
  req.response.sendFile("web/zk.html");
});
routeMatcher.get('.lite.html', function(req) {
  req.response.sendFile("web/lite.html");
});
/*
 * upload file if exist exit with error
 */
routeMatcher.post('/upload', function(req) {
  //req.response.headers().set("Access-Control-Allow-Origin", "http://localhost:8080");
  //req.response.putHeader("Access-Control-Allow-Origin", "*");
  //req.pause();
  var str = '';
  var data = [];
  req.headers().forEach(function(key, value) {
    console.log("[ " + key + "  :  " + value + "]");
  });

  //req.response.headers().set("Access-Control-Allow-Methods", "OPTIONS, HEAD, GET, POST, PUT, DELETE");
  /*
    req.response.putAllHeaders({
      'Access-Control-Allow-Origin': options.accessControl.allowOrigin,
      'Access-Control-Allow-Methods': options.accessControl.allowMethods
      });
 */
  console.log("ahoj");
  var output = '';
  req.params().forEach(function(key, value) {
    console.log("[ " + key + "  :  " + value + "]");
  });
  if (req.params().isEmpty()) {
    console.log("prazdny params");
  }
  /*for (property in req.params()) {
  output += property + ': ' + req.params()[property]+'; ';
}
console.log(output);*/
  var filename = "data[1]";
  var path = config['path'];
  var nameWithPath = config['path'] + filename;

  req.bodyHandler(function(body) {
    console.log("JSON.stringify(body)");

    console.log('The total body received was ' + body.length() + ' bytes');
    //console.log(JSON.stringify(body));
  });



  req.uploadHandler(function(upload) {
    console.log("start upload");
    upload.streamToFileSystem(path + upload.filename());
  /*vertx.fileSystem.exists(path+upload.filename(), function(err, response) {
    if (!response) {
      //req.response.chunked(true);
      vertx.fileSystem.open(path+upload.filename(), function(err, file) {
        if (!err) {
          var pump = new vertx.Pump(req, file)
          req.endHandler(function() {
            file.close(function() {
              console.log("Uploaded " + pump.bytesPumped() + " bytes of ");
              req.response.end();
            });
          });
          pump.start()
          req.resume()
          //req.response.write('file :' + filename + ' save to : ' + path, "UTF-8");
        } else {
          console.log(err);
          req.response.statusCode = 404;
          req.response.end('file exists', 'UTF-8');
          req.response();
        }
      });
    } else {
      req.response.end('File exists', 'UTF-8');
      console.log(filename + " :: " + path);
      req.resume();
    };
    });*/
  });

  //req.resume();
    req.endHandler(function() {
    // The request has been all ready so now we can look at the form attributes
    req.expectMultiPart(true);
    var attrs = req.formAttributes();
    console.log("zaciname");
    attrs.forEach(function(key, value) {
      console.log("[ " + key + "  :  " + value + "]");
    });
  });
});
routeMatcher.options('/upload', function(req) {
  req.response.end();
})
/*
 * return array files from path dir you might change in config
 */
routeMatcher.get('/files', function(req) {
  var dir = [];
  req.pause();
  vertx.fileSystem.readDir(config['path'], function(err, res) {
    if (!err) {
      for (var i = 0; i < res.length; i++) {
        dir[i] = res[i];
        //console.log(res[i]);
      }
    }
    req.response.end(dir);
    req.resume();
  });
});
/*
 * smaze file podle parametru name
 * kdyz neexistuje ukonci req error messega
 */
routeMatcher.get('/delete', function(req) {
  filename = config['path'] + req.params()['name'];
  vertx.fileSystem.delete(filename, function(err) {
    if (err) {
      console.log(err);
      req.response.end(err, 'UTF-8');
    } else {
      req.response.end('Succefuly ok', 'UTF-8');
    }

  });
});

/*
 * post file
 */
routeMatcher.get('/file', function(req) {
  req.response.chunked(true);
  filename = config['path'] + req.params()['name'];
  req.response.sendFile(filename);
});
/*
 * create users dir
 */
routeMatcher.get('/createDir', function(req) {
  dirname = config['path'] + 'majklk';
  vertx.fileSystem.mkdir(dirname, function(err, res) {
    if (!err) {
      console.log('createDir ok');
      req.response.end('createDir ok', 'UTF-8');
    }
  });

});


routeMatcher.noMatch(function(req) {
  if (req.path().indexOf('..') == -1) {
    console.log(req.path());
    req.response.sendFile('web/' + req.path());
  } else {
    req.response.statusCode = 401;
    req.response.end("Nothing matched");

  }
});

server.requestHandler(routeMatcher);
server.listen(config['port']);