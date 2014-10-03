'use strict';

var app = angular.module('devSocial', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){

  $routeProvider
    .when('/login', {
      templateUrl: 'app/js/home/home.html',
      controller: 'homeCtrl'
      // resolve: {
      //   allData: function($route, homeService){
      //     return homeService.getAllData();
      //   }
      // }
    })
    .when('/git', {
      templateUrl: 'app/js/home/git.html',
    })
    .otherwise({
      redirectTo: '/login'
    });

}]);