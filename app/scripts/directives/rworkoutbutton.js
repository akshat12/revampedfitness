'use strict';

/**
 * @ngdoc directive
 * @name revampedFitnessApp.directive:rWorkoutButton
 * @description
 * # rWorkoutButton
 * @binding workoutTitle - self explanatory
 * @binding record - an object containing the last PR's stats
 */
var rWorkoutButton = {
	bindings: {
		workoutTitle: '@',
		record: '='
	},
	templateUrl: 'scripts/directives/partials/workoutbutton.html',
	controller: function() {
		this.workoutTitle = this.workoutTitle.toUpperCase();
		// TODO: Convert this into a lang and use interpolation
		this.recordText = '' +
			(this.record.weight ? 'PR at ' + this.record.weight + ' kg' : '') +
			(this.record.time ? '. Last attempted ' + this.record.time + ' days ago' : '');
	}
};

angular.module('revampedFitnessApp').component('rWorkoutButton', rWorkoutButton);