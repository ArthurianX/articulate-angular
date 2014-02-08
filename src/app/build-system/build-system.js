angular.module('articulate.build-system', [
      'ui.router.state',
      'ajoslin.promise-tracker'
    ])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
    .config(function config($stateProvider) {
      $stateProvider.state('build-system', {
        url: '/build-system',
        views: {
          "main": {
            controller: 'BuildCtrl',
            templateUrl: 'build-system/build-system.tpl.html'
          }
        },
        data: { pageTitle: 'Build System' }
      });
    })

    .controller('BuildCtrl', function BuildController($scope, promiseTracker) {

    })

;

