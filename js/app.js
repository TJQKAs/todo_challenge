(function(angular) {
  'use strict';
angular.module('controllerAsExample', [])
  .controller('SettingsController1', SettingsController1);

function SettingsController1() {
  this.tasks = [
    {type: 'low importance', value: 'go to a zoo'},
    {type: 'high importance', value: 'byu bicycle'} ];
}


SettingsController1.prototype.addTask = function() {
  this.tasks.push({type: 'task', value: 'current task'});
};

SettingsController1.prototype.removeTask = function(taskToRemove) {
 var index = this.tasks.indexOf(taskToRemove);
  this.tasks.splice(index, 1);
};

SettingsController1.prototype.clearTask = function(task) {
  task.type = '';
  task.value = '';
};
})(window.angular);
