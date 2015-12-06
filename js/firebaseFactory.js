todoApp.factory("Todos", ["$firebaseArray",
  function($firebaseArray) {
    // create a reference to the database location where we will store our data
    // var randomTodoId = Math.round(Math.random() * 100000000);
    // var ref = new Firebase("https://docs-sandbox.firebaseio.com/af/intro/demo/" + randomRoomId);
    var ref = new Firebase('intense-torch-7748.firebaseIO.com')
    // this uses AngularFire to create the synchronized array
    return $firebaseArray(ref);
  }
]);
