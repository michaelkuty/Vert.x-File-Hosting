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
function LoginCtrl($scope,$rootScope,$location,$eb){
	$scope.user={};
	
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
			$location.path("upload");
		});

		alert(JSON.stringify("Logged in: "+user.login));
	};

	$scope.doRegistration=function(user){
		$eb.send("registration",{user:user},function(userID){
			$eb.send("get_user",{userID:userID},function(user){
				$scope.user=user;
				$rootScope.$broadcast('loggedIn');
				$location.path("upload");
			})
		});
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
	$scope.tableColumns=[
		{label: 'ID', map: '_id'},
		{label: 'Nazev',map: 'filename'}
	];
	$scope.globalConfig={
        isPaginationEnabled:true
    };
	$scope.files=[];
	//TODO other attribute // filter
	$scope.publicSearch = function(search){
		/*$scope.files=[
		{_id:"IDčkoa",filename:"nazev_filety"},
		{_id:"IDčkoa2",filename:"nazev_filety2"}
		];*/
		$eb.send("simple_search", {"matcher":{"filename": search.input, "type": "*"}}, function(reply){
			console.log(JSON.stringify(reply.files));
			$scope.$apply(function(){$scope.files=reply.files});
		});
	};

}