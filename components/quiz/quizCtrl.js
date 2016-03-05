var app = angular.module("quizApp");

app.controller("quizCtrl", function($scope, $stateParams) {
  $scope.test = "on the quiz page";
  console.log($stateParams);
  $scope.quizName = $stateParams.quizName;
  // $scope.questions = questions;

});
