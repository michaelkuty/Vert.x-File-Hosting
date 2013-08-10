var pro = angular.module('pro', ['ui.bootstrap','ui.directives','blueimp.fileupload','$strap.directives'])


.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/angularjs.html', {templateUrl: 'angularjs.html'})
}])
.config([

            '$httpProvider', 'fileUploadProvider',
            function ($httpProvider, fileUploadProvider) {
                
                //if (isOnGitHub) {
                 //   // Demo settings:
                  //  delete $httpProvider.defaults.headers.common['X-Requested-With'];
                   // angular.extend(fileUploadProvider.defaults, {
                    //    disableImageResize: false,
                     //   maxFileSize: 5000000,
                      //  acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i
                   // });
                //}
            }
        ]);

/*
*factory metoda zpristupnujici EventBus pod promenou eb
*/
pro.factory('$eb', function($LoginService){
  var eb = null;

  if (!eb) {
    //var eb = new vertx.EventBus("http://localhost:8080/eventbus");
    eb = new vertx.EventBus(window.location.protocol + '//' + window.location.hostname + ':' + window.location.port + '/eventbus');
  } else {
    return eb;
  }
  
  eb.onopen = function(){};
  $LoginService.spojeni = 'true';
  eb.onclose = function(){
        eb=null;
      };
  return eb;
});
/*
*LoginService JSON poskytujici basic info o uzivately
*/
pro.factory('$LoginService', function(){
  return {
    username : '',
    sessionID: 'zadne',
    loggedIn: 'false',
    spojeni: 'false',
  }
});
var DFileUploadController = function  DFileUploadController($scope, $http) {
                    url = 'http://localhost:8888/';
                    $scope.loadingFiles = true;
                    $scope.options = {
                        url: url
                    };
                    $http.get(url)
                        .then(
                            function (response) {
                                $scope.loadingFiles = false;
                                $scope.queue = response.data.files;
                            },
                            function () {
                                $scope.loadingFiles = false;
                            }
                        );
            };
/*
* overeni uzivatele ze znameho sessionID
*/
var Authorise = function Authorise($scope, $eb, sessionID, $LoginService){
  var ano = false;
  $eb.send('vertx.basicauthmanager.authorise', {"sessionID": sessionID}, function(reply){
    if (reply.status === 'ok') {
      alert('sessionID' + reply.status + '\n' + reply.username);
      $LoginService.sessionID = sessionID;
      $LoginService.username = reply.username;
      $LoginService.loggedIn = 'true';
      $scope.$apply();
    } else {
      $LoginService.loggedIn = 'false';
      alert(reply.status);
      ano = true;
    }
  });
  return ano;
};


function SpojeniController($scope, $LoginService){
  $scope.pripojeni = $LoginService.spojeni;
};


/*
*dialogove okno vyberu souboru
*/
function FileUploadCntl($scope, $timeout, $log, $http, $eb) {
  $scope.createUser = function() {

    var fileInput = document.getElementById('uploadedFile');
    var file = fileInput.files[0];

        $eb.send('vertx.mongopersistor', { "action": "save", "collection": "files","document": file }, function (reply) {
        if (reply.status === 'ok') {
          alert(reply.status);
          alert(file.name);
          alert(JSON.stringify(reply));
        } else {
          alert(reply.status + '\n' + 'error: ' + reply.message);
        }
   });
      
  };
};
function FileSearch($scope, $eb){
  $scope.dbFiles = {};
  $scope.search = function(){
  $scope.dbFiles = [];  
  $eb.send('vertx.mongopersistor', {"action":"find", "collection":"files", "matcher":{name: $scope.fileName}}, function (reply){
    //alert(reply.status);
    if (reply.status === 'ok') {
     // alert('zaciname' + JSON.stringify(reply.results) + reply.results.length);
      for (var i = 0; i < reply.results.length; i++) {
        $scope.dbFiles.push(reply.results[i]);
      };
      //alert(JSON.stringify(reply.results));
      $scope.$apply();
    } else {
      alert('chyba s připojením na server');
      };
  });
  
};
};
/*
*overovaci metoda count na kolekci s matcherem
*/
function CountUsers(kolekce, matcher, $eb){
    $eb.send('vertx.mongopersistor', {"action": "count", "collection": kolekce, "matcher": matcher}, function(reply){
      if (reply.status === 'ok') {
        alert(reply.count);
      };
    });
};




function AlertCtrl($scope) {
  if ($scope.alerts == null) {
    $scope.alerts = [];
  };
  

  $scope.addAlert = function() {
    
  };
  function loginSucceful()  {
    $scope.alerts.push({
      "type": "success",
      "title": "Login OK!",
      "content": "supr"
    });
  };
  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };

};

/*
*modalni okno loginu
*/
var LoginModalFrame = function ($scope, $eb, $LoginService) {
  $scope.loggedIn = $LoginService.loggedIn;
  $scope.jmeno = $LoginService.username;
  $scope.ValEmail = 'n';
  $scope.ValUserName = 'n';
  var ValidEmail = false;
  var ValidUserName = false;
  /*
  * validace username testuje req na db
  */
  $scope.ValUserName = function(){
    $scope.ValUserName = 'probíhá ověřování';
    $eb.send('vertx.mongopersistor', {action: "find", collection: "users", matcher: {username: $scope.user.username}}, function(reply){
        if (reply.status === 'ok') {
          if (reply.number > 0 ) {        
            //alert(JSON.stringify('uzivatel jiz existuje!!!'));
            $scope.ValUserName = 'Již existuje !!';
            $scope.$apply();
          } else {
            $scope.ValUserName = 'ok';
            ValUserName = true;
            $scope.$apply();
          }
        } else {
          alert('chyba s databází: ' + reply.error);
        }
     });
  };
    $scope.ValEmail = function(){
    $scope.ValEmail = 'probíhá ověřování';
    $eb.send('vertx.mongopersistor', {action: "find", collection: "users", matcher: {email: $scope.user.email}}, function(reply){
        if (reply.status === 'ok') {
          if (reply.number > 0 ) {        
            //alert(JSON.stringify('Zadaný email již existuje!!!'));
            $scope.ValEmail = 'Zadaný email již existuje!!!';
            $scope.$apply();
          } else {
            $scope.ValEmail = 'ok';
            ValidEmail = true;
            $scope.$apply();
          }
        } else {
          $scope.ValEmail = 'chyba s databází: ' + reply.error;
          $scope.$apply();
          //alert('chyba s databází: ' + reply.error);
        }
     });
  };
  /*
  testuje jestli uživatel neexistuje
  */
  $scope.reg = function(){
    $scope.ValUserName();
    $scope.ValEmail();
    if ($scope.regForm.$valid && ValidEmail == true && ValUserName == true) {
      $eb.send('vertx.mongopersistor', {action: "save",collection: "users",document: $scope.user}, function(reply){
            alert(reply.status);
        });
    }else {
      alert('Vyplňte všechny položky nebo opravte ty které jsou špatně');
    }
      
  };
  $scope.login = function() {
    if ($scope.jmeno.trim() != '' && $scope.password.trim() != '') {
        $eb.send('vertx.basicauthmanager.login', {username: $scope.jmeno, password: $scope.password}, function (reply) {
          if (reply.status === 'ok') {
            AlertCtrl.loginSucceful();
            $LoginService.username = $scope.username;
            $scope.loggedIn = $LoginService.loggedIn = 'true';
            $scope.sessionID = reply.sessionID;
            Authorise($scope ,$eb, $scope.sessionID, $LoginService);
            $scope.$apply();
        } else {
          alert(reply.status + '\n' + 'error: ' + reply.message);
        }
        });
    
      }else {
        alert('prazdne pole');
      }
      
  };

  $scope.openReg = function () {
    if ($scope.shouldBeOpen === true) {
      $scope.close();
    };
    $scope.shouldBeOpenReg = true;
  };

  $scope.closeReg = function () {
    $scope.closeMsg = 'I was closed at: ' + new Date();
    $scope.shouldBeOpenReg = false;
  };

  $scope.open = function () {
    $scope.shouldBeOpen = true;
  };

  $scope.close = function () {
    $scope.closeMsg = 'I was closed at: ' + new Date();
    $scope.shouldBeOpen = false;
  };

  $scope.opts = {
    backdropFade: true,
    dialogFade:true
  };

};


