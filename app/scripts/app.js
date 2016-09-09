'use strict';

/**
 * @ngdoc overview
 * @name revampedFitnessApp
 * @description
 * # revampedFitnessApp
 *
 * Main module of the application.
 */
angular
  .module('revampedFitnessApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function($compileProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
  }).config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/workouts', {
        templateUrl: 'views/workouts.html',
        controller: 'WorkoutsCtrl',
        controllerAs: 'workouts'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
