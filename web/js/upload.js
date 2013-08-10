var upload = angular.app('upload', []).
config(function($httpProvider) {
	var options ={
  	accessControl: {
                allowOrigin: '*',
                allowMethods: 'OPTIONS, HEAD, GET, POST, PUT, DELETE'
            }
		}
	$httpProvider.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
	$httpProvider.defaults.headers.post['Access-Control-Allow-Methods'] = options.accessControl.allowMethods;  
});

upload.factory('$eb', function(){
  var eb = null;

  if (!eb) {
    //var eb = new vertx.EventBus("http://localhost:8080/eventbus");
    eb = new vertx.EventBus(window.location.protocol + '//' + window.location.hostname + ':' + window.location.port + '/eventbus');
  } else {
    return eb;
  }
  
  eb.onopen = function(){};

  eb.onclose = function(){
        eb=null;
      };
  return eb;
});


function uploadForm($scope, $eb, $http) {
	$scope.param = {};
	$scope.name = 'Superhero';
	$scope.size = '';
	$scope.type = '';
	uploadForm.prototype.$scope = $scope;
	// Check for the various File API support.


	
  
	$scope.submit = function(file) {

		var url = 'http://localhost:8888/upload';
		

  var xhr = new XMLHttpRequest();
  xhr.open('POST', url, true);
  xhr.onload = function(e) {  };

  xhr.send(file);  // multipart/form-data
		
}


uploadForm.prototype.setFile = function(element) {
    var $scope = this.$scope;
    $scope.$apply(function() {
        $scope.theFile = element.files[0];
    });
};

function testForm($scope, $eb){

	$scope.handleFileSelect = function(evt) {
    var files = evt.target.files; // FileList object

    // files is a FileList of File objects. List some properties.
    var output = [];
    for (var i = 0, f; f = files[i]; i++) {
      output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
                  f.size, ' bytes, last modified: ',
                  f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
                  '</li>');
    }
   alert(JSON.stringify(output));
  }
}

