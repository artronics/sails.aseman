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
        template:'<div ui-view></div>'
      })
      .state('root.ide',{
        url:'/ide',
        controller:'IDECtrl as ideCtrl',
        templateUrl:'/templates/ide.html'
      })

  })
;
