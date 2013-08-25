'use strict';

/* Controllers */

angular.module('filehosting.controllers', []);

function AppCtrl($scope,$eb,localStorageService){
	// init users
	$eb.onopen=function(){
		viewMessage({type:'info',text:"Spojení se serverem navázáno"});
		$eb.send("get_locale_messages",{"locale":"EN"},function(messages){
			console.log("messages");
		});
		if(typeof this.userID !== 'undefined' && $this.userID!==null){
			$eb.send("get_user",{userID: $eb.userID},function(user){
				$scope.$apply(function(){
					$scope.user=user;
				});
			});
		}else if(localStorageService.get("sessionID")!=null){
			var sessionID = localStorageService.get("sessionID");
			$eb.sessionID=sessionID;
			$eb.send("get_auth_user", {sessionID: sessionID},function(user){
				$scope.$apply(function(){
					$scope.user=user;
					$eb.userID=user.id;
				});
			});
		}
	}
	$eb.onclose=function(){
		viewMessage({type:'info',text:'Spojení se serverem bylo ukončeno'});
	};

	var viewMessage = function(data) {
		var stack_left = {"dir1": "down", "dir2": "right", "push": "top"};
		if(typeof data === 'object' && !(data instanceof Array)){
			var notice = {
				icon: false,
				closer: false,
				sticker: false,
				addclass:'stack-topleft',
				stack:stack_left, 
				type: data.type,
				text: data.text,
				opacity: 0.8,
				delay: 3000,
				hide: true,
				nonblock: true,
				closer_hover: true,
				history: false
			}
			$.pnotify(notice);
		}else if(data instanceof Array){
			angular.forEach(data, function(value, key){
				var notice = {
					icon: false,
					closer: false,
					sticker: false,
					addclass:'stack-topleft',
					stack:stack_left, 
					type: alert.type,
					text: alert.text,
					opacity: 0.8,
					delay: 3000,
					hide: false,
					nonblock: false,
					closer_hover: true,
					history: true
				}
				$.notify(notice);
			});
		}else{
			console.log("error in message");
		}
	}
	$scope.$on('message',function(event,message){
		viewMessage(message);
	});
	$scope.$on('loggedIn',function(event,data){
		$scope.user=data.user;
	});
	$scope.$on('loggedOut',function(){
		delete $scope.user;
	});
}

function UploadCtrl($scope,$eb){
	$scope.initUploader = function(){
		var params={};
		//send userID if exists
		if($eb.sessionID != null){
			params.sessionID=$eb.sessionID;
		}
		registerFileUploader(params);
	};
}
function LoginCtrl($scope,$location,$eb,localStorageService){
	$scope.doLogin= function(user){
		//example call
		$eb.send("user_exist_in_db",{username:user.login}, function(reply){
			console.log(JSON.stringify(reply));
		});
		$eb.login(user.login,user.pass,function(res){
			$eb.send("get_auth_user", {sessionID: $eb.sessionID},function(user){
				$scope.user=user;
				$scope.$apply(function(){
					$scope.$emit('loggedIn',{user:$scope.user});
					localStorageService.add('sessionID',$eb.sessionID);
					$scope.$emit('message',{type:"info",text:"Příhlášení proběhlo úspěšně"});
				});
			});
			console.log("sessionID: " + $eb.sessionID);
			//minimal one file for result
			$eb.send("read_dir",{"sessionID": $eb.sessionID}, function(res){
				console.log(res);
			});
			$location.path("upload");
		});
	};
	$scope.doRegistration = function(user){
		$eb.send("registration",{user:user},function(response){
			$scope.$apply(function(){
				//$scope.user=response.user;
				$eb.sessionID=response.sessionID;
				$scope.$emit('loggedIn',{user:response.user});
				$location.path("upload");
				$scope.$emit("message",{type:"info",text:"Registrace dopadla úspěšně"});
			});
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
	$scope.validateFormInput = function(formName,inputName,value,negation){
		$eb.send("exist_in_db",{key:inputName,value:value},function(res){
			$scope.$apply(function(){
				if(((typeof negation === 'undefined' || !negation ) && res) || (typeof negation !== 'undefined' && negation && !res)){
					$scope[formName][inputName].$setValidity("exists",false);
				}else{
					$scope[formName][inputName].$setValidity("exists",true);
				}
			});
		});
	};
}

function HeaderCtrl($scope,$eb,localStorageService){
	$scope.doLogout=function(){
		$eb.logout($eb.sessionID,function(res){
			if(res.status==="ok"){
				localStorageService.clearAll();
				$scope.$apply(function(){
					$scope.$emit("message",{type:"info",text:"Odhlášení proběhlo úspěšně"});
					$scope.$emit('loggedOut');
				});
			}
		});
	};
};
function FooterCtrl(){}
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
					$scope.file_widgets.push({
						file:$scope.files[i],
						row:rowIndex,
						col:colIndex,
						sizex:1,
						sizey:1
					});
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
	$scope.privateSearch = function(search){
	$scope.messages.initial=false;
	//TODO check boxs for public private and both searchs for logged users
	if ($eb.sessionID !== null) {
		$eb.send("simple_search",{"sessionID":$eb.sessionID,"public":false,"matcher":{"filename": search.input, "type": "*",}}, function(reply){
		console.log(JSON.stringify(reply.files));
		setFiles(reply.files);
		});
	} else {
		console.log("Nemáme sessionID ID");
	}

};

}
function MyFilesCtrl($scope, $eb, localStorageService){
	$scope.settings ={
		gridSettings :{
			widgetsInRow: 8
		},
	};
	$scope.messages = {
		initial: true,
		noFile : false
	};
	$eb.onopen = function(){
		console.log(this.sessionID);
		$eb.send("mkdir_path",{"sessionID":localStorageService.get("sessionID")}, function(res){
			console.log(res);
		});
	
	}
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
					$scope.file_widgets.push({
						file:$scope.files[i],
						row:rowIndex,
						col:colIndex,
						sizex:1,
						sizey:1
					});
				};
			}else{
				$scope.messages.noFiles=true;
			}
	};


	$scope.privateSearch = function(search){
	$scope.messages.initial=false;
	//TODO check boxs for public private and both searchs for logged users
	if ($eb.sessionID !== null) {
		$eb.send("simple_search",{"sessionID":$eb.sessionID,"public":false,"matcher":{"filename": search.input, "type": "*",}}, function(reply){
		console.log(JSON.stringify(reply.files));
		setFiles(reply.files);
		});
	} else {
		console.log("Nemáme sessionID ID");
	}
	};
}
function FileDetailCtrl($scope,$routeParams,$eb){
$scope.file={filename:$routeParams.filename};
}