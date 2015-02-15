'use strict';

angular.module('womenInAdf', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'youtube-embed', 'directives.skrollr', 'angularSmoothscroll'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('results', {
        url: '/results',
        templateUrl: 'app/main/results.html',
        controller: 'ResultsCtrl'
      })
      .state('results.jobs', {
        url: '/global/jobSelector/jobSelectWindow_SavedJobs.aspx',
        templateUrl: 'app/main/results.html',
        controller: 'ResultsCtrl'
      });


    $urlRouterProvider.otherwise('/');
  });
