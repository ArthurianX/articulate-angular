angular.module('articulate.structure', [
      'ui.router.state',
      'ajoslin.promise-tracker'
    ])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
    .config(function config($stateProvider) {
      $stateProvider.state('structure', {
        url: '/structure',
        views: {
          "main": {
            controller: 'StructureCtrl',
            templateUrl: 'structure/structure.tpl.html'
          }
        },
        data: { pageTitle: 'Structure' }
      });
    })

    .controller('StructureCtrl', function StructureController($scope, promiseTracker) {

    })

;

