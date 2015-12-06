
describe('todoController', function() {
  beforeEach(module('todoApp'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('todoController');
  }));

  it('initialises with an empty todo list', function() {
    // expect(ctrl.todos).toBeUndefined();
    // expect(ctrl.addTodo).toBeUndefined();
  });
});
