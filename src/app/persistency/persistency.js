angular.module('articulate.persistency', [
      'ui.router.state',
      'ajoslin.promise-tracker'
    ])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
    .config(function config($stateProvider) {
      $stateProvider.state('persistency', {
        url: '/persistency',
        views: {
          "main": {
            controller: 'PersistencyCtrl',
            templateUrl: 'persistency/persistency.tpl.html'
          }
        },
        data: { pageTitle: 'Persistency' }
      });
    })

    .controller('PersistencyCtrl', function PersistencyController($scope, promiseTracker) {

    })

;

