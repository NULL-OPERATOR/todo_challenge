app.controller('todoController', ['$scope', function($scope) {

  $scope.todos = [
    {done: true, text: 'first'},
    {done: false, text: 'second'}
  ];
  // $scope.addTodo = function() {
  //   var newTodo = {
  //     done: false,
  //
  //   }
  // };
}])
