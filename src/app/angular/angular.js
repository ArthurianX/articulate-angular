angular.module('articulate.angular', [
      'ui.router.state',
      'ajoslin.promise-tracker'
    ])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
    .config(function config($stateProvider) {
      $stateProvider.state('angular', {
        url: '/angular',
        views: {
          "main": {
            controller: 'AngularCtrl',
            templateUrl: 'angular/angular.tpl.html'
          }
        },
        data: { pageTitle: 'Angular' }
      });
    })

    .controller('AngularCtrl', function AngularController($scope, promiseTracker) {

    })

;

