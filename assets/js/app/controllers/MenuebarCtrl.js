'use strict';

angular.module('aseman')
.controller('MenuebarCtrl',['$scope',function ($scope) {
  var self =this;
  self.menueItems = $scope.$parent.GUI.menueItems;

}]);
