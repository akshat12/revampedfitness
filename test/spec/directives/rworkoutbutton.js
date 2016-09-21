'use strict';

describe('Directive: rWorkoutButton', function () {

  // load the directive's module
  beforeEach(module('revampedFitnessApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<r-workout-button></r-workout-button>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the rWorkoutButton directive');
  }));
});
