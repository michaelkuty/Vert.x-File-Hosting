var app = angular.module('filehosting', ['ngRoute']).
factory('$eb', function() {
  var eb = null;
  if (!eb) {
    //var eb = new vertx.EventBus("http://localhost:8080/eventbus");
    eb = new vertx.EventBus(window.location.protocol + '//' + window.location.hostname + ':' + 8889 + '/eventbus');
  } else {
    return eb;
  }
  return eb;
}).
config(function($routeProvider) {
$routeProvider.
when('/', {controller:UploadCtrl, templateUrl:'pages/upload.html'}).
//when('/edit/:projectId', {controller:EditCtrl, templateUrl:'detail.html'}).
when('/search', {controller:SearchCtrl, templateUrl:'pages/search.html'}).
when('/login',{controller:LoginCtrl,templateUrl:'pages/login.html'}).
when('/registration',{controller:LoginCtrl,templateUrl:'pages/registration.html'}).
otherwise({redirectTo:'/'});
});



function LoginCtrl($scope, $rootScope, $eb){

	$scope.doLogin= function(user){
		$eb.login(user.login,user.pass,function(res){
			console.log(JSON.stringify(res));
			console.log("sessionID: " + $eb.sessionID);
			console.log("userID: " + $eb.userID);
			//send event to all controllers
			$rootScope.$broadcast('loggedIn',{userID: $eb.userID});
			//minimal one file for result
			$eb.send("read_dir",{"sessionID": $eb.sessionID}, function(res){
				console.log(res);
			});
		});

		alert(JSON.stringify(user.login));
	};

	$scope.doReg=function(user){

	}

}
function UploadCtrl($scope){

}
function HeaderCtrl($scope){
	$scope.$on('loggedIn',function(event,data){
		//TODO: get complete user from DB
		$scope.user={username:data.userID};
	});
}
function FooterCtrl($scope){

}
function SearchCtrl($scope, $eb){
	//TODO other attribute // filter
	$scope.publicSearch = function(search){
		$eb.send("simple_search", {"matcher":{"filename": search.input}}, function(reply){
			console.log(JSON.stringify(reply));
			console.log(reply);
		})
	}
}