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

	$scope.workoutRecords = [{
		workoutTitle: 'Hangs',
		record: {
			weight: 70,
			time: 5
		}
	}, {
		workoutTitle: 'Press Clean',
		record: {
			weight: 80,
			time: 9
		}
	}];
}


angular.module('revampedFitnessApp').controller('WorkoutsCtrl', WorkoutsCtrl);