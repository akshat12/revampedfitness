'use strict';

/**
 * @ngdoc function
 * @name revampedFitnessApp.controller:WorkoutsCtrl
 * @description
 * # WorkoutsCtrl
 * Controller of the revampedFitnessApp
 */
function WorkoutsCtrl($scope) {
	$scope.scrollBarItems = ['favorites', 'endurance', 'strength', 'speed'];
}


angular.module('revampedFitnessApp').controller('WorkoutsCtrl', WorkoutsCtrl);