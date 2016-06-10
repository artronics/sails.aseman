'use strict';

angular.module('aseman')
.controller('MainCtrl',[function () {
  var self = this;
  self.foo = 'barr';
  console.log(self.foo);
}])
