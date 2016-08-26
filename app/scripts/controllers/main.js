'use strict';

/**
 * @ngdoc function
 * @name revampedFitnessApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the revampedFitnessApp
 */
angular.module('revampedFitnessApp')
  .controller('MainCtrl', function (cordova) {
	  cordova.ready.then(function () {
	      alert('Cordova is ready');
	  });
  });
