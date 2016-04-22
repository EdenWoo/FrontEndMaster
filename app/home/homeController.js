'use strict';

angular.module('myApp.homeview', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/homeview.html',
    controller: 'HomeviewCtrl'
  });
}])

.controller('HomeviewCtrl', [function() {

}]);