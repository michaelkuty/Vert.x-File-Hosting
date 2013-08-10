var files = angular.module('files', ['ui.bootstrap']);
/*
*factory metoda zpristupnujici EventBus pod promenou eb
*/
files.factory('$eb', function(){
  var eb = new vertx.EventBus("http://localhost:8080/eventbus");
  eb.onopen = function(){alert('pripojeni na eb OK')};
  eb.onclose = function(){
        eb=null;
      }
  return eb;
});
function Ctrl($scope) {
  $scope.userType = 'guest';
}
function ParrentController($scope){
$scope.parents = [
  { name: 'Anna', 
    children: ['Alvin', 'Becky' ,'Charlie'] },
  { name: 'Barney', 
    children: ['Dorothy', 'Eric'] },
  { name: 'Chris', 
    children: ['Frank', 'Gary', 'Henry'] }
];
$scope.items = [
  { name: 'Anna', 
    children: ['Alvin', 'Becky' ,'Charlie'] },
  { name: 'Barney', 
    children: ['Dorothy', 'Eric'] },
  { name: 'Chris', 
    children: ['Frank', 'Gary', 'Henry'] }
];

};