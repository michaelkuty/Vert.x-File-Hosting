var crypt = angular.module('crypt', []);

crypt.factory('$eb', function(){
  var eb = null;

  if (!eb) {
    //var eb = new vertx.EventBus("http://localhost:8080/eventbus");
    eb = new vertx.EventBus(window.location.protocol + '//' + window.location.hostname + ':' + window.location.port + '/eventbus');
  } else {
    return eb;
  }
  
  eb.onopen = function(){};
  eb.onclose = function(){
        eb=null;
      };
  return eb;
});

var HashPass = function HashPass($scope, $eb){
	var bcrypt = dcodeIO.bcrypt;

	 $scope.ready = "not ready!!";

	 $scope.saltt = "";
	 $scope.HashPass = "";

	 $scope.comp = "non";

	$scope.submitt = function(){
		
			$scope.ready = "ready to HashPass!!";
	
			var salt = bcrypt.genSaltSync(10);
			var hash = bcrypt.hashSync("B4c0/\/", salt);
			alert(hash);
			
	}
	$scope.compar = function(){
		bcrypt.hash("bacon", null, null, function(err, hash) {
   
		});
		bcrypt.compare($scope.pass, hash, function(err, res) {
   
	});
	}



}