'use strict';
angular.module('filehosting.services', []).
  factory('$eb', function() {
  var eb = null;
  if (!eb) {
    //var eb = new vertx.EventBus("http://localhost:8080/eventbus");
    eb = new vertx.EventBus(window.location.protocol + '//' + window.location.hostname + ':' + 8889 + '/eventbus');
  } else {
    return eb;
  }
  return eb;
});