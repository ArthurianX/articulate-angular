angular.module('articulate.authentication', [
      'ui.router.state',
      'ajoslin.promise-tracker'
    ])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
    .config(function config($stateProvider) {
      $stateProvider.state('authentication', {
        url: '/authentication',
        views: {
          "main": {
            controller: 'AuthCtrl',
            templateUrl: 'authentication/authentication.tpl.html'
          }
        },
        data: { pageTitle: 'Authentication' }
      });
    })

    .controller('AuthCtrl', function AuthenticationController($scope, promiseTracker) {

    })

;

