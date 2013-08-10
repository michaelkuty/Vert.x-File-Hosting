var pro = angular.module('pro', ['ui.bootstrap', 'ui.directives']);


pro.factory('$eb', function() {
  var eb = null;
  if (!eb) {
    //var eb = new vertx.EventBus("http://localhost:8080/eventbus");
    eb = new vertx.EventBus(window.location.protocol + '//' + window.location.hostname + ':' + window.location.port + '/eventbus');
  } else {
    return eb;
  }


  eb.onopen = function() {};
  eb.onclose = function() {
    eb = null;
  };
  return eb;
});


var FileSearch = function($scope, $eb) {
  $.pnotify({
    type: 'success',
    text: 'HOVNA',
    history: false
  });
  $scope.search = function() {
    $scope.dbFiles = {};
    $scope.dbFiles = [];
    $eb.send('vertx.mongopersistor', {
      "action": "find",
      "collection": "files",
      "matcher": {
        name: $scope.fileName
      }
    }, function(reply) {
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


  }
}