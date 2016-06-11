'use strict';

angular.module('aseman')
.controller('IDECtrl',['GUI',function (GUI) {
  var self = this;
  self.GUI = GUI;
  console.log('parent');
  console.log(GUI);
  self.foo = 'ide ctrl';
}]);
