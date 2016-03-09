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
    controller: function($scope) {
      $scope.$watch("question", function() {
        $scope.selected = "";
      })
      $scope.update = function(choice) {
          $scope.selected = choice;
      }
      $scope.saveAnswer = function(selected) {
        debugger;
        $scope.save({
          id: $scope.question.id,
          answer: selected
        })
      }
    }
  }
});
