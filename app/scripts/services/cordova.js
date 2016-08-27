'use strict';

/**
 * @ngdoc service
 * @name revampedFitnessApp.cordova
 * @description
 * # cordova
 * Factory in the revampedFitnessApp.
 */
angular.module('revampedFitnessApp')
  .factory('cordova', function () {
    var d = $q.defer(),
    resolved = false;

    this.ready = d.promise;

    document.addEventListener('deviceready', function () {
        resolved = true;
        d.resolve($window.cordova);
    });

    // Check to make sure we didn't miss the
    // event (just in case)
    setTimeout(function () {
        if (!resolved) {
            if ($window.cordova) {
                d.resolve($window.cordova);
            }
        }
    }, 3000);

    return this;
  });
