'use strict';

angular.module('aseman', [
  'ui.router'
])
  .config(function ($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('root', {
        abstract: true,
      })

      .state('ide', {
        url: '/ide',
        controller: 'IDECtrl as ideCtrl',
        templateUrl: '/templates/ide.html',
        resolve: {
          GUI: function ($http) {
            return $http({method: 'GET', url: '/gui'})
              .then(function (res) {
                return res.data;
              });
          }
        }
      })

  })
;
