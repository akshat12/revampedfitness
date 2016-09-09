'use strict';

describe('Directive: rScrollButton', function () {

  // load the directive's module
  beforeEach(module('revampedFitnessApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<r-scroll-button></r-scroll-button>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the rScrollButton directive');
  }));
});
