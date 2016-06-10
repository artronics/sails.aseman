'use strict';

angular.module('aseman',[
  'ui.router'
])
  .config(function($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('root', {
        url: "/",
      })
  })
;
