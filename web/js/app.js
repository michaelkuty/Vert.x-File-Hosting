angular.module('filehosting', ['ngRoute']).
config(function($routeProvider) {
$routeProvider.
when('/', {controller:UploadCtrl, templateUrl:'pages/upload.html'}).
//when('/edit/:projectId', {controller:EditCtrl, templateUrl:'detail.html'}).
when('/search', {controller:SearchCtrl, templateUrl:'pages/search.html'}).
when('/login',{controller:LoginCtrl,templateUrl:'pages/login.html'}).
otherwise({redirectTo:'/'});
});


function LoginCtrl($scope){
	$scope.doLogin= function(user){
		alert(JSON.stringify(user));
	};
}
function UploadCtrl($scope){}
function SearchCtrl($scope){}