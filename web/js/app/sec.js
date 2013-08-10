/*
ukazkova direktiva
*/
pro.directive('login', function($scope) {
  $scope.sessionID = 'bla';
 return function(scope, element, attrs) {element.text('HOVNA' + scope.sessionID)};
});