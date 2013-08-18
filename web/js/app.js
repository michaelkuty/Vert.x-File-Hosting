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
otherwise({redirectTo:'/'});
});



function LoginCtrl($scope, $eb){

	$scope.doLogin= function(user){
		$eb.login(user.login,user.pass,function(res){
			console.log(JSON.stringify(res));
      console.log("sessionID: " + $eb.sessionID);
      console.log("userID: " + $eb.userID);
		});

		alert(JSON.stringify(user.login));
	};
}
function UploadCtrl($scope){}
function SearchCtrl($scope){}