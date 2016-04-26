'use strict';

angular.module('myApp.blogitemview', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/blog-item', {
    templateUrl: 'blogitem/blogitemView.html',
    controller: 'BlogitemCtrl'
  });
}])

.controller('BlogitemCtrl', [function() {

}]);