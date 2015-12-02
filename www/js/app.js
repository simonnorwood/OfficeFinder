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
.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/Main');

  $stateProvider

  .state('Main',{
    url: '/Main',
    templateUrl: 'templates/Main.html',
    controller: 'APICtrl'
})

  .state('Favourites',{
    url: '/Favourites',
    templateUrl: 'templates/Favourites.html',
    controller: 'FavCtrl'
  })

  .state('modal',{
    url:'/modal',
        templateUrl: "templates/modal.html",
        controller: 'APICtrl'
  })
  
}])