angular.module('articulate.contact', [
      'ui.router.state',
      'ajoslin.promise-tracker'
    ])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
    .config(function config($stateProvider) {
      $stateProvider.state('contact', {
        url: '/contact',
        views: {
          "main": {
            controller: 'ContactCtrl',
            templateUrl: 'contact/contact.tpl.html'
          }
        },
        data: { pageTitle: 'Contact' }
      });
    })

    .controller('ContactCtrl', function ContactController($scope, promiseTracker) {

    })

;

