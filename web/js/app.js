'use strict';
angular.module('filehosting', ['filehosting.services', 'filehosting.directives','filehosting.controllers','LocalStorageModule']).
config(function($routeProvider) {
$routeProvider.
when('/', {controller:'UploadCtrl', templateUrl:'pages/upload.html'}).
//when('/edit/:projectId', {controller:EditCtrl, templateUrl:'detail.html'}).
when('/search', {controller:'SearchCtrl', templateUrl:'pages/search.html'}).
when('/login',{controller:'LoginCtrl',templateUrl:'pages/login.html'}).
when('/registration',{controller:'LoginCtrl',templateUrl:'pages/registration.html'}).
when('/account',{controller:'LoginCtrl',templateUrl:'pages/user_edit.html'}).
when('/tests',{controller:'TestCtrl',templateUrl:'pages/tests.html'}).
otherwise({redirectTo:'/'});
});

