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
      url: "/quiz",
      templateUrl: "components/quiz/views/quizContainerView.html",
      controller: "quizCtrl"
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
