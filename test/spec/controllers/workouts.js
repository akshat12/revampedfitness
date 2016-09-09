'use strict';

describe('Controller: WorkoutsCtrl', function () {

  // load the controller's module
  beforeEach(module('revampedFitnessApp'));

  var WorkoutsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WorkoutsCtrl = $controller('WorkoutsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(WorkoutsCtrl.awesomeThings.length).toBe(3);
  });
});
