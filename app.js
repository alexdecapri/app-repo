var app = angular.module("quizApp", ["ui.router"]);

app.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "components/home/homeView.html",
      controller: "homeCtrl",
      resolve: {
        quizList: function(quizService) {
          return quizService.getQuizNames();
        }
      }
    })
    .state("quiz", {
      url: "/quiz/:quizName",
      templateUrl: "components/quiz/views/quizContainerView.html",
      controller: "quizCtrl",
      resolve: {
        questions: function (quizService, $stateParams) {
          var name = $stateParams.quizName;
          return quizService.getQuestions(name);
        }
      }
    })
    // .state("quiz.view", {
    //   url:
    //   templateUrl:
    //   controller:
    // })
    .state("results", {
      url: "/results",
      templateUrl: "components/results/resultsView.html",
      controller: "resultsCtrl"
    })

  $urlRouterProvider
    .otherwise("/")

})
