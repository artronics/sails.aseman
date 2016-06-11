'use strict';

angular.module('aseman',[
  'ui.router'
])
  .config(function($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('root', {
        abstract:true,
        // resolve:{
        //   IDEObj:
        //     function($http) {
        //       // $http returns a promise for the url data
        //       return $http({method: 'GET', url: '/ide'});
        //     }
        // }
      })
      .state('root.ide',{
        url:'/',
        controller:'IDECtrl as ideCtrl',
        templateUrl:'/templates/ide.html'
      })

  })
;
