var app = angular.module("quizApp");

app.directive("multipleChoice", function() {
  return {
    templateUrl: "components/quiz/partials/multipleChoiceTmpl.html",
    scope: {
      question: "=",
      save: "&",
      answers: "="
    },
    restrict: "AE",
    replace: true,
  }
})
