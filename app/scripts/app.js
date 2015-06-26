'use strict';

/**
 * @ngdoc overview
 * @name app
 * @description
 * # app
 *
 * Main module of the application.
 */
var app = angular
  .module('app', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'flow'
])
  .config(function ($routeProvider) {
  $routeProvider
    .when('/', {
    templateUrl: 'views/file.html',
    controller: 'FileCtrl'
  })
    .otherwise({
    redirectTo: '/'
  });
})
  .value('configData', {
  serviceBase: 'http://localhost:51710/'
});