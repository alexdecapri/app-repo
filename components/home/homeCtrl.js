var app = angular.module("quizApp");

app.controller("homeCtrl", function($scope, quizList) { //quizList connects to app.js resolve
  // $scope.test = "on the home page";
  // console.log(pastQuizList); not defined yet
  $scope.quizzes = quizList;
  // console.log($scope.quizzes);

});
