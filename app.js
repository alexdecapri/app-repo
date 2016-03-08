var app = angular.module("quizApp", ["ui.router"]);

app.run(function ($rootScope, $state) {
  $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
    if(toState.name === "quiz") {
      event.preventDefault();
      $state.go("quiz.view", toParams)
    }
  })
});

app.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "components/home/homeView.html",
      controller: "homeCtrl",
      resolve: {
        quizList: function(quizService) { //maybe not right name
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
    .state("quiz.view", {
      parent: 'quiz',
      views: {
        'list': {
          templateUrl: 'components/quiz/views/questionListWrapperView.html'
        },
        'detail': {
          templateUrl: 'components/quiz/views/questionDetailView.html'
        }
      }
    })
    .state("results", {
      url: "/results",
      templateUrl: "components/results/resultsView.html",
      controller: "resultsCtrl"
    })

  $urlRouterProvider
    .otherwise("/")

})
