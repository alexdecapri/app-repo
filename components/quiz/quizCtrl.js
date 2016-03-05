var app = angular.module("quizApp");

app.controller("quizCtrl", function($scope, $stateParams) {
  $scope.test = "on the quiz page";

  $scope.quizName = $stateParams.quizName;
  // $scope.questions = questions;

});
