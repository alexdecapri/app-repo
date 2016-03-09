var app = angular.module("quizApp");

app.controller("quizCtrl", function($scope, $stateParams, questions, quizService) { //refers to line 22 app.js resolve questions
  // console.log($stateParams);
  // $scope.quizName = $stateParams.quizName; //to show us that it was there, deleted on 3/3 of Day 1
  $scope.questions = questions;
  $scope.answers = {};
  $scope.currentQuestion = $scope.questions[0];
  $scope.results = {};

  $scope.saveAnswer = function(answer) {
    $scope.answers[$scope.currentQuestion.id] = answer;
    $scope.nextQuestion();
    if ($scope.results.done) {
      //we've already hit "check answrs so update the answer results"
      $scope.checkMyAnswers();
    }
  };
  // $scope.saveAnswer = function(id, answer) {
  //   $scope.answers[id] = answer;
  // }; //not working now...

  $scope.setCurrentQuestion = function(question) {
    $scope.currentQuestion = question;
  }

  $scope.handleEnter = function(ev, answer) {
    /* black diamond to make this work*/
  }

  $scope.nextQuestion = function() {
    var idx = $scope.questions.indexOf($scope.currentQuestion);
    if ($scope.questions[idx + 1]) {
      $scope.currentQuestion = $scope.questions[idx + 1];
    }
    else {
      return;
    }
  }

  $scope.checkMyAnswers = function() {
    quizService.checkMyAnswers($scope.questions, $scope.answers).then(function (response) {
      $scope.results = response;
    });
  }

  $scope.reset = function() {
    $scope.answers = {};
    $scope.currentQuestion = $scope.questions[0];
  }

});
