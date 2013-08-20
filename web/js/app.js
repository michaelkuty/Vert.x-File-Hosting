'use strict';
angular.module('filehosting', ['filehosting.services', 'filehosting.directives','filehosting.controllers','ngRoute']).
config(function($routeProvider) {
$routeProvider.
when('/', {controller:'UploadCtrl', templateUrl:'pages/upload.html'}).
//when('/edit/:projectId', {controller:EditCtrl, templateUrl:'detail.html'}).
when('/search', {controller:'SearchCtrl', templateUrl:'pages/search.html'}).
when('/login',{controller:'LoginCtrl',templateUrl:'pages/login.html'}).
when('/registration',{controller:'LoginCtrl',templateUrl:'pages/registration.html'}).
otherwise({redirectTo:'/'});
});

