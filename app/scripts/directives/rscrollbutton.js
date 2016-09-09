'use strict';

/**
 * @ngdoc directive
 * @name revampedFitnessApp.directive:rScrollButton
 * @description
 * # rScrollButton
 */
var rScrollButton = {
	bindings: {
		text: '@',
		meta: '='
	},
	templateUrl: 'scripts/directives/partials/scrollbutton.html',
	controller: function() {
		this.buttonText = (this.text || '').toUpperCase();
	}
};

angular.module('revampedFitnessApp').component('rScrollButton', rScrollButton);