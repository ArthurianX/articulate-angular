angular.module('articulate.get-started', [
      'ui.router.state',
      'ajoslin.promise-tracker'
    ])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
    .config(function config($stateProvider) {
      $stateProvider.state('get-started', {
        url: '/get-started',
        views: {
          "main": {
            controller: 'StartedCtrl',
            templateUrl: 'get-started/get-started.tpl.html'
          }
        },
        data: { pageTitle: 'Get Started' }
      });
    })

    .controller('StartedCtrl', function StartedController($scope, promiseTracker) {

    })

;

