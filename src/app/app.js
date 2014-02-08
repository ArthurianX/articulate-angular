angular.module('articulate', [
      'ngAnimate',
      'ngSanitize',
      'ivpusic.cookie',
      'templates-app',
      'templates-common',
      /*VVV PAGES VVV*/
      'ui.router.state',
      'ui.route',
      'anim-in-out',
      'articulate.home',
      'articulate.angular',
      'articulate.build-system',
      'articulate.contact',
      'articulate.get-started',
      'articulate.injection-loading',
      'articulate.persistency',
      'articulate.structure',
      'ngTouch',
      /*VVV Providers VVV*/
      'articulate.providers',
      'hljs',
      /*VVV App Config VVV*/
      'articulate.config'

    ])

    .config(function myAppConfig($stateProvider, $urlRouterProvider, $locationProvider, $logProvider, $githubProvider, $anchorScrollProvider, github) {
      $locationProvider.html5Mode(true).hashPrefix('!');

      $logProvider.debugEnabled(false);

      $urlRouterProvider.otherwise('/home');

      $githubProvider.username(github.username)
          .repository(github.repository)
          .branch(github.branch);

      $anchorScrollProvider.disableAutoScrolling();

    })

    .run(function run($rootScope) {
      //Set body class for individual route pages.
      $rootScope.$on('$stateChangeSuccess', function (event, currentState) {
        $rootScope.getCurrentLocation = function () {
          return currentState.name + '-page';
        };
        if ($rootScope.debugStatus === true) {
          console.log('We are on the "' + currentState.name + '" page.');
        }
      });

    })

    .controller('AppCtrl', function AppCtrl($scope, $location, $stateParams) {

      $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        if (angular.isDefined(toState.data.pageTitle)) {
          $scope.pageTitle = toState.data.pageTitle + ' | Articulate Angular';
        }
      });

    })

    .controller('HeaderCtrl', function HeaderCtrl($scope, $q, $log, $github) {

      //TODO: Make first tag, fix visuals.
      var DOWNLOAD_URL_TEMPLATE = 'https://github.com/ArthurianX/articulate-angular/archive/master.zip',
          FALLBACK_BRANCH = 'master';

      //TODO: Github is an ass, uncomment the code when working on the footer.
      /*$github.getTags().then(function (data) {
       $scope.latestTag = data && data.length ? data[0] : {};
       $scope.downloadUrl = DOWNLOAD_URL_TEMPLATE.replace('%REF%', $scope.latestTag.name);
       }, function (e) {

       $log.error('could not fetch latest tag; falling back to ' + FALLBACK_BRANCH, e);

       $scope.latestTag = { name: FALLBACK_BRANCH };
       $scope.downloadUrl = DOWNLOAD_URL_TEMPLATE.replace('%REF%', FALLBACK_BRANCH);
       });*/
    })

    .controller('FooterCtrl', function FooterCtrl($scope, $q, $log, $github) {

      //TODO: Github is an ass, uncomment the code when working on the footer.
      /*var githubCalled = false;

       if (!githubCalled) {
       // GitHub api calls
       $q.all([$github.getCommits(), $github.getContributors(), $github.getIssues(), $github.getEvents()])
       .then(function (results) {

       var commits = results[0],
       contributors = results[1],
       issues = results[2],
       events = results[3];

       angular.extend($scope, {
       github: {
       branch: $github.getBranch(),
       commits: {
       latest: commits.length ? commits[0] : {},
       all: commits
       },
       issuesCount: issues.length,
       issues: issues,
       contributors: contributors,
       events: events
       }
       });

       $log.info($scope.github);

       }, function (err) {
       $log.error(err);
       $scope.github = null;
       });

       githubCalled = true;
       }

       function actorLink(actor) {
       return '<a href="' + actor.url + '" rel="external">' + actor.login + '</a>';
       }

       $scope.eventLabel = function (event) {

       var pl = event.payload;

       switch (event.type) {
       case 'WatchEvent':
       return 'starred this repository';

       case 'CreateEvent':
       return 'created ' + pl.ref_type + ' ' + pl.ref;

       case 'ForkEvent':
       return 'forked this repository';

       case 'PushEvent':
       return 'pushed ' + pl.size + ' commit(s) to ' + pl.ref.replace('refs/heads/', '');

       case 'IssueCommentEvent':
       return 'commented on issue ' + pl.issue.number;

       case 'DeleteEvent':
       return 'deleted ' + pl.ref_type + ' ' + pl.ref;

       case 'PullRequestEvent':
       return pl.action + ' pull request ' + pl.pull_request.number;

       case 'IssuesEvent':
       return pl.action + ' issue ' + pl.issue.number;

       case 'PullRequestReviewCommentEvent':
       return 'commented on a <a href="' + pl.comment.html_url + '" rel="external">pull request</a>';

       case 'GollumEvent':
       var page = pl.pages && pl.pages.length ? pl.pages[0] : null;

       if (page) {
       return page.action + ' page <a href="' + page.html_url + '" rel="external">' + page.title + '</a> on the wiki';
       }

       return '[api data error]';
       }

       return "TODO (" + event.type + ")";
       };*/

    })

;