angular.module('starter', ['ionic', 'starter.controllers', 'ionic.utils'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

//states for each page
//i have disbaled caching for each so it updates when a view is changed
.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/Main');

  $stateProvider

//main page
  .state('Main',{
    //cache: false,
    url: '/Main',
    templateUrl: 'templates/Main.html',
    controller: 'APICtrl'
})

//favourites page
  .state('Favourites',{
    //cache: false,
    url: '/Favourites',
    templateUrl: 'templates/Favourites.html',
    controller: 'APICtrl'
  })

//modal popup that displays enlarged address view and map view
  .state('modal',{
    //cache: false,
    url:'/modal',
        templateUrl: "templates/modal.html",
        controller: 'APICtrl'
  })

    .state('Support',{
    //cache: false,
    url:'/Support',
        templateUrl: "templates/Support.html",
        controller: 'APICtrl'
  })
  
}])