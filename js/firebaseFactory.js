todoApp.factory("Todos", ["$firebaseArray",
  function($firebaseArray) {
    var ref = new Firebase('intense-torch-7748.firebaseIO.com')
    return $firebaseArray(ref);
  }
]);
