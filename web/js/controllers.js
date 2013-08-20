'use strict';

/* Controllers */

angular.module('filehosting.controllers', []);

function UploadCtrl($scope,$eb){
	$scope.initUploader = function(){
		var params={};
		//send userID if exists
		if($eb.userID!==null){
			params.userID=$eb.userID;
		}
		registerFileUploader(params);
	};
}
function LoginCtrl($scope,$rootScope,$eb){
	$scope.doLogin= function(user){
		$eb.login(user.login,user.pass,function(res){
			console.log(JSON.stringify(res));
			console.log("sessionID: " + $eb.sessionID);
			console.log("userID: " + $eb.userID);
			//send event to all controllers
			$rootScope.$broadcast('loggedIn');
			//minimal one file for result
			$eb.send("read_dir",{"sessionID": $eb.sessionID}, function(res){
				console.log(res);
			});
		});

		alert(JSON.stringify("Logged in: "+user.login));
	};

	$scope.doRegistration=function(user){
	};
}
function HeaderCtrl($scope,$eb){
	$scope.$on('loggedIn',function(){
		$eb.send("get_user", { userID: $eb.userID},function(user){
				$scope.user=user;
		});
		
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
		});
	};
}