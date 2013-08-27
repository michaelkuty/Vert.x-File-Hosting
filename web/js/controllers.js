'use strict';

/* Controllers */

angular.module('filehosting.controllers', []);

function AppCtrl($scope,$eb,localStorageService){
	// first init
	$eb.addOpenCall(function(){
		viewMessage({type:'info',text:"Spojení se serverem navázáno"});
		$eb.send("get_locale_messages",{"locale":"EN"},function(messages){
			console.log(messages);
		});
		if(typeof $eb.sessionID !== 'undefined' && $eb.sessionID !== null){
			$eb.send("get_auth_user",{sessionID: $eb.sessionID},function(user){
				if(user !== null){
					$scope.$apply(function(){
						$scope.user=user;
					});
				}else{
					$eb.sessionID = null;
				}
			});
		}else if(localStorageService.get("sessionID")!=null){
			var sessionID = localStorageService.get("sessionID");
			$eb.send("get_auth_user", {sessionID: sessionID},function(user){
				if(user !== null){
					$scope.$apply(function(){
						$scope.user=user;
						$eb.sessionID=sessionID;
					});
				}else{
					localStorageService.remove("sessionID");
				}
			});
		}
	});
	$eb.addCloseCall(function(){
		viewMessage({type:'info',text:'Spojení se serverem bylo ukončeno'});
	});

	var viewMessage = function(data) {
		var stack_bar_top = {"dir1": "down", "dir2": "right", "push": "top", "spacing1": 0, "spacing2": 0};
		if(typeof data === 'object' && !(data instanceof Array)){
			var notice = {
				icon: false,
				closer: false,
				sticker: false,
				addclass:'stack-bar-top',
				stack:stack_bar_top,
				width:"100%", 
				type: data.type,
				text: data.text,
				opacity: 0.85,
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
					addclass:'stack-bar-bottom',
					stack:stack_bar_bottom, 
					type: alert.typ,
					text: alert.text,
					width: "70%",
					opacity: 0.9,
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
	var callbacks={
		before: function(){
			$scope.$apply(function(){
				$scope.files=[];
				$scope.uploading = true;
				$scope.uploaderMessage="Nahrávám..."
				$scope.$emit("message",{type:"info",text:"Nahrávání souboru začalo"});
			});
		},
		each : function(file,errors){
			$scope.$apply(function(){
				$scope.files.push(file);
			});
		},
		success: function(response){
			if(response.result === "ok"){
				$scope.$apply(function(){
					delete $scope.uploading;
					$scope.uploaded=true;
					$scope.uploaderMessage="Nahrávání dokončeno";
					$scope.$emit("message",{type:"ok",text:"Nahrávání souboru dokončeno"});
				});
			}
		},
		fail: function(xhr){
			$scope.$apply(function(){
				$scope.$emit("message",{type:"error",text:"Došlo k chybě při nahrávání souboru"});
			});
		}
	}
	$scope.init_upload = function(){
		var params={};
		//add sessionID if exists
		if($eb.sessionID != null){
			params.sessionID=$eb.sessionID;
		}
		registerFileUploader("/upload",params,callbacks);
		$scope.uploaderInited=true;
	};
	$scope.bytesToSize = function (bytes) {
	    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
	    if (bytes == 0) return 'n/a';
	    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
	    if (i == 0) return bytes + ' ' + sizes[i]; 
	    return (bytes / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i];
	};
	if($eb.readyState()){
		$scope.init_upload();
	}else{
		$eb.addOpenCall($scope.init_upload);
	}
}
function LoginCtrl($scope,$location,$eb,localStorageService){
	$scope.doLogin= function(user){
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
			$eb.send("mkdir_path",{"sessionID":$eb.sessionID});
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
function FooterCtrl($scope,$eb){
$eb.addOpenCall(function(){
	$eb.send("get_version",function(version){
		$scope.$apply(function(){
			$scope.version = version;
		});
	});
});
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
					//resolve is directory or not
					if($scope.files[i].ext==="dir"){
						$scope.files[i].type="dir";
					}else{
						$scope.files[i].type="file";
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
					//resolve is directory or not
					if($scope.files[i].ext==="dir"){
						$scope.files[i].type="dir";
					}else{
						$scope.files[i].type="file";
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

function TestCtrl($scope,$eb){
			// create an SVG element inside the #graph div that fills 100% of the div
		var graph = d3.select("#graph").append("svg:svg").attr("width", "100%").attr("height", "100%");

		// create a simple data array that we'll plot with a line (this array represents only the Y values, X will just be the index location)
		var data = [3, 6, 2, 7, 5, 2, 1, 3, 8, 9, 2, 5, 9, 3, 6, 3, 6, 2, 7, 5, 2, 1, 3, 8, 9, 2, 5, 9, 2, 7, 5, 2, 1, 3, 8, 9, 2, 5, 9, 3, 6, 2, 7, 5, 2, 1, 3, 8, 9, 2, 5, 9];

		// X scale will fit values from 0-10 within pixels 0-100
		var x = d3.scale.linear().domain([0, 10]).range([0, 50]);
		// Y scale will fit values from 0-10 within pixels 0-100
		var y = d3.scale.linear().domain([0, 10]).range([0, 30]);

		// create a line object that represents the SVN line we're creating
		var line = d3.svg.line()
			// assign the X function to plot our line as we wish
			.x(function(d,i) { 
				// verbose logging to show what's actually being done
				console.log('Plotting X value for data point: ' + d + ' using index: ' + i + ' to be at: ' + x(i) + ' using our xScale.');
				// return the X coordinate where we want to plot this datapoint
				return x(i); 
			})
			.y(function(d) { 
				// verbose logging to show what's actually being done
				console.log('Plotting Y value for data point: ' + d + ' to be at: ' + y(d) + " using our yScale.");
				// return the Y coordinate where we want to plot this datapoint
				return y(d); 
			})
	
			// display the line by appending an svg:path element with the data line we created above
			graph.append("svg:path").attr("d", line(data));
}