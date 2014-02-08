angular.module('articulate.injection-loading', [
      'ui.router.state',
      'ajoslin.promise-tracker'
    ])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
    .config(function config($stateProvider) {
      $stateProvider.state('injection-loading', {
        url: '/injection-loading',
        views: {
          "main": {
            controller: 'InjectionCtrl',
            templateUrl: 'injection-loading/injection-loading.tpl.html'
          }
        },
        data: { pageTitle: 'Dependencies and Injection Loading' }
      });
    })

    .controller('InjectionCtrl', function InjectionController($scope, promiseTracker) {

    })

;

