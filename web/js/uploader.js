angular.module('uploader', ['ngUpload'])
  .controller('mainCtrl', function($scope) {
    $scope.results = function(content, completed) {
      if (completed && content.length > 0)
        console.log(content); // process content
      else
      {
        // 1. ignore content and adjust your model to show/hide UI snippets; or
        // 2. show content as an _operation progress_ information
      }
    }
});