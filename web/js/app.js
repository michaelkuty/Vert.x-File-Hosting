'use strict';
angular.module('filehosting', ['filehosting.services', 'filehosting.directives', 'filehosting.controllers','ngRoute']).
config(function($routeProvider) {
$routeProvider.
when('/', {controller:'UploadCtrl', templateUrl:'pages/upload.html'}).
//when('/edit/:projectId', {controller:EditCtrl, templateUrl:'detail.html'}).
when('/search', {controller:'SearchCtrl', templateUrl:'pages/search.html'}).
when('/login',{controller:'LoginCtrl',templateUrl:'pages/login.html'}).
when('/registration',{controller:'LoginCtrl',templateUrl:'pages/registration.html'}).
otherwise({redirectTo:'/'});
});

<<<<<<< HEAD
=======


function LoginCtrl($scope, $rootScope, $eb){

	$scope.doLogin= function(user){
		$eb.login(user.login,user.pass,function(res){
			console.log(JSON.stringify(res));
			console.log("sessionID: " + $eb.sessionID);
			console.log("userID: " + $eb.userID);
			//send event to all controllers
			$rootScope.$broadcast('loggedIn',{userID: $eb.userID});
			//re-register uploader
			registerFileUploader({userID:$eb.userID});
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
function UploadCtrl($scope,$eb){
	$scope.initUploader = function(){
		var params={};
		//send userID if exists
		if($eb.userID!==null){
			params.sessionID=$eb.sessionID;
		}
		registerFileUploader(params);
	}
}
function HeaderCtrl($scope,$eb){
	$scope.$on('loggedIn',function(event,data){
		//TODO: get complete user from DB
		$eb.send("get_user", {userID:$eb.userID},function(res){
			console.log(JSON.stringify(res));
		})
		$scope.user={username:data.userID};
	});
}
function FooterCtrl($scope){

}
function SearchCtrl($scope, $eb){
	//TODO other attribute // filter
	$scope.publicSearch = function(search){
		$eb.send("simple_search", {"matcher":{"filename": search.input, "type": "*"}}, function(reply){
			console.log(JSON.stringify(reply));
			console.log(reply);
		})
	}
}
>>>>>>> 59409df022c423c763901bf5c636a0e068af6443
