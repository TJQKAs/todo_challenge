todoList.controller('ToDoListController', [function(){
  var self = this;
  self.taskList = [];

  self.addTask = function(){
    var task = {description: self.newTask,
                completed: false};
    self.taskList.push(task);
    self.newTask = '';
  };
});
