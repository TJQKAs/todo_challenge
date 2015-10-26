describe('ToDoListController', function() {
  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));

  it('Inicially our list is empty', function() {
     expect(ctrl.taskList).toEqual([]);
  });
  
