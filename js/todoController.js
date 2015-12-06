todoApp.controller('todoController', [ "Todos",
  function(Todos) {

  var self = this;
  var ref = new Firebase('intense-torch-7748.firebaseIO.com')
  self.todos = Todos;

  // self.addTodo = function() {
  //   var newTodo = {
  //     text: self.todoText,
  //     done: false
  //   };
  //   self.todos.push(newTodo);
  //   self.todoText = '';
  // };
  self.addTodo = function() {
    // var newTodo = {
    //   text: self.todoText,
    //   done: false
    // };
    self.todos.$add({
      text: self.todoText,
      done: false
    });
    self.todoText = '';
  };

    self.deleteTodo = function(start) {
      self.todos.splice(start, 1)
    };

    self.moveTodo = function(index, direction) {
      if (direction === 'up') {
        if (index === 0) {
          return;
        }
        index -= 1;
      }
      if (index === self.todos.length -1) {
        return;
      }
      var todo = self.todos[index];
      self.todos.splice(index + 2, 0, todo);
      self.todos.splice(index, 1);
    }


}]);
