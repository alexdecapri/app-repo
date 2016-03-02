var app = angular.module("quizApp", ["ui.router"]);

app.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state("home", {
      url: "/home",
      templateUrl: "components/home/homeView.html",
      controller: "homeCtrl"
    })
    .state("quiz", {
      url: "/quiz",
      templateUrl: "components/quiz/views/quizContainerView.html",
      controller: "quizCtrl.js"
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
    .otherwise("/home")

})
