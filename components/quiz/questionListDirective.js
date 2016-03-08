var app = angular.module("quizApp");

app.directive("questionList", function() {
  return {
    scope: {
      questions: "=",
      results: "=",
      answers: "=",
      currentQuestion: "=",
      setCurrentQuestion: "&"
    },
    templateUrl: "components/quiz/partials/quizListView.html"
  }
})
