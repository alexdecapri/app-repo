var app = angular.module("quizApp");

app.controller("homeCtrl", function($scope, quizList) {
  $scope.test = "on the home page";
  console.log(quizList);
  $scope.quizzes = quizList;

});
