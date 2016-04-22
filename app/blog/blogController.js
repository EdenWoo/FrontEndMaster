'use strict';

angular.module('myApp.blogview', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/blog', {
    templateUrl: 'blog/blogview.html',
    controller: 'BlogviewCtrl'
  });
}])

.controller('BlogviewCtrl', [function() {

}]);