// define our app and dependencies (remember to include firebase!)
var app = angular.module("sampleApp", ["firebase"]);

// this factory returns a synchronized array of chat messages

app.controller("ChatCtrl", ["$scope", "chatMessages",
  // we pass our new chatMessages factory into the controller
  function($scope, chatMessages) {
    $scope.user = "Guest " + Math.round(Math.random() * 100);

    // we add chatMessages array to the scope to be used in our ng-repeat
    $scope.messages = chatMessages;

    // a method to create new messages; called by ng-submit
    $scope.addMessage = function() {
      // calling $add on a synchronized array is like Array.push(),
      // except that it saves the changes to our database!
      $scope.messages.$add({
        from: $scope.user,
        content: $scope.message
      });

      // reset the message input
      $scope.message = "";
    };

    // if the messages are empty, add something for fun!
    $scope.messages.$loaded(function() {
      if ($scope.messages.length === 0) {
        $scope.messages.$add({
          from: "Firebase Docs",
          content: "Hello world!"
        });
      }
    });
  }
]);
