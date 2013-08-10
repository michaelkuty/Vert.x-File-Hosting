angular.module('mailer', ['ui.bootstrap']);

 function MailerController($scope) {
	$scope.subject = 'none';
	$scope.from = 'michael.kuty@uhk.cz';
	$scope.to = '6du1ro.n@gmail.com';
	$scope.telo = 'telo mailu';

	$scope.sendMail = function(){
		eb = new vertx.EventBus("http://localhost:8080/eventbus");
      eb.onopen = function(){
        eb.send('test.my_mailer', {from: $scope.from, to: $scope.to, subject: $scope.subject, body:$scope.telo}, null);
        };
      eb.onclose = function(){
        
      }
	
};

};