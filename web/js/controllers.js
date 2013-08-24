'use strict';

/* Controllers */

angular.module('filehosting.controllers', []);

function UploadCtrl($scope,$eb){
	$scope.initUploader = function(){
		var params={};
		//send userID if exists
		if($eb.userID != null){
			params.sessionID=$eb.sessionID;
		}
		registerFileUploader(params);
	};
}

function LoginCtrl($scope,$rootScope,$location,$eb,localStorageService){
	if(typeof $eb.userID !== 'undefined' && $eb.userID!==null){
		$eb.send("get_user",{userID: $eb.userID},function(user){
			$scope.$apply(function(){
				$scope.user=user;
			});
		});
	}else if(localStorageService.get("user")!=null){
		var storageUser = localStorageService.get("user");
		//login from localstorage
		//$eb.login(storageUser.username,storageUser)
		$scope.user=storageUser;
		$rootScope.$broadcast("loggedIn",{user:storageUser});
	}else{
		$scope.user={};
	}
	$scope.doLogin= function(user){
		//example call
		$eb.send("user_exist_in_db",{username:user.login}, function(reply){
			console.log(JSON.stringify(reply));
		});
		$eb.login(user.login,user.pass,function(res){
			$eb.send("get_user", { userID: $eb.userID},function(user){
				$scope.user=user;
				$rootScope.$broadcast('loggedIn',{user:$scope.user});
				localStorageService.add('user',$scope.user);
			});
			console.log("sessionID: " + $eb.sessionID);
			console.log("userID: " + $eb.userID);
			//minimal one file for result
			$eb.send("mkdir_path",{"sessionID": $eb.sessionID,"name":"ahoj"}, function(res){
				console.log(res);
			});
			$eb.send("read_dir",{"sessionID": $eb.sessionID}, function(res){
				console.log(res);
			});
			$location.path("upload");
		});

		alert(JSON.stringify("Logged in: "+user.login));
	};
	$scope.doRegistration = function(user){

		$eb.send("registration",{user:user},function(userID){
			//console.log(JSON.stringify(userID));
			$eb.send("get_user",{userID:userID},function(user){
				console.log(JSON.stringify(user));
				
				$scope.user=user;
				$rootScope.$broadcast('loggedIn');
				$location.path("upload");
			})
		});
	};
	$scope.updateUser = function(user){
		$eb.send("update_user",{user:user},function(userID){
			//console.log(JSON.stringify(userID));
			if(userID === user.id){
				$location.path("upload");
			}
		});
	};
	$scope.checkUsername = function(username){
		$eb.send("user_exist_in_db",{username:username},function(res){
			console.log(res);
		});
	}
	$scope.checkEmail = function(email){
		$eb.send("email_exist_in_db",{"email":email},function(res){
			console.log(res);
		});
	}
}

function HeaderCtrl($scope,$eb){
	$scope.$on('loggedIn',function(event,data){
		$scope.user=data.user;
	});
	//TODO
	$scope.doLogout=function(user){
		$eb.login($eb.sessionID,function(res){
			$rootScope.$broadcast('loggedOut');
		});
	};
};

function FooterCtrl($scope){

}
function SearchCtrl($scope, $eb){
	$scope.settings ={
		gridSettings :{
			widgetsInRow: 8
		},
	};
	$scope.messages = {
		initial: true,
		noFile : false
	};
	var setFiles = function(files){
		$scope.$apply(function(){
			$scope.files=files;
			setWidgets();
		});
	};
	var setWidgets=function(){
		$scope.file_widgets=[];
		if($scope.files.length!=0){
			$scope.messages.noFiles=false;
			var rowIndex=1,colIndex;
				for (var i = 0; i < $scope.files.length; i++) {
					var colIndex = i+1;
					if(colIndex>$scope.settings.gridSettings.widgetsInRow){
						rowIndex++;
					}
					$scope.file_widgets.push({text:$scope.files[i].filename,row:rowIndex,col:colIndex,sizex:1,sizey:1});
				};
			}else{
				$scope.messages.noFiles=true;
			}
	};
	//TODO other attribute // filter
	$scope.publicSearch = function(search){
		$scope.messages.initial=false;
		//TODO check boxs for public private and both searchs for logged users
		if ($eb.sessionID !== null) {
			$eb.send("simple_search",{"sessionID":$eb.sessionID,"matcher":{"filename": search.input, "type": "*"}}, function(reply){
			console.log(JSON.stringify(reply.files));
			setFiles(reply.files);
			});
		} else {
			$eb.send("simple_search",{"matcher":{"filename": search.input, "type": "*"}}, function(reply){
			console.log(JSON.stringify(reply.files));
			setFiles(reply.files);
			});
		}

	};

}