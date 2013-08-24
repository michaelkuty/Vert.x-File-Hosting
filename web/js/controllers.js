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
function LoginCtrl($scope,$rootScope,$location,$eb){
	$scope.user={};
	
	$scope.doLogin= function(user){
						//example call
		$eb.send("user_exist_in_db",{username:user.login}, function(reply){
			console.log(JSON.stringify(reply));
		});
		$eb.login(user.login,user.pass,function(res){
			console.log(JSON.stringify(res));
			console.log("sessionID: " + $eb.sessionID);
			console.log("userID: " + $eb.userID);
			//send event to all controllers
			$rootScope.$broadcast('loggedIn');
				user["_id"] = $eb.userID
				user["username"] = "TEST UPDATE"
				//$eb.send("registration",{user:user},function(res) {
				//		console.log("user update");
				//})
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

}
function HeaderCtrl($scope,$eb){
	$scope.$on('loggedIn',function(){
		$eb.send("get_user", { userID: $eb.userID},function(user){
			//console.log(JSON.stringify(user));
				$scope.user=user;
		})
		
	});
	//TODO
	$scope.doLogout=function(user){
		$eb.login($eb.sessionID,function(res){
			$rootScope.$broadcast('loggedOut');
		});
	}
};

function FooterCtrl($scope){

}
function SearchCtrl($scope, $eb){
	//mode 0 table 1 grid
	$scope.settings ={
		mode:1,
		tableColumns:[
			{label: 'ID', map: '_id'},
			{label: 'Nazev',map: 'filename'}
		],
		tableSettings :{
			isPaginationEnabled:false
		},
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
	$scope.switchView=function(){
		if($scope.settings.mode==1){
			$scope.settings.mode=0;
		}else if($scope.settings.mode==0){
			$scope.settings.mode=1;
		}
	};
	//TODO other attribute // filter
	$scope.publicSearch = function(search){
		$scope.messages.initial=false;
		//TODO check boxs for public private and both searchs for logged users
		if ($eb.sessionID != null) {
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