angular.module('starter.controllers', ['ionic.utils'])

// regions controller for testing
.controller('regionCTRL', function($scope){
	console.log("regions");
})

// api call to offices.json 
.controller('APICtrl', function($scope, $http, $localstorage, $window) {
// Search function
  $scope.query = {}
  $scope.queryBy = '$'
// gets the data from offices.json
 $http.get('js/offices.json').then(function(resp) {
    console.log('Success', resp);
    $scope.offices = resp.data.office;  
  }, function(err) {
    console.error('ERR', err);
    // err.status will contain the status code
  });

$scope.favourties= JSON.parse($window.localStorage['fav']);
//$scope.favourites = $window.localStorage['favs'] ? JSON.parse($window.localStorage['favs']) : []
if($window.localStorage['fav']){
    $scope.favorites = JSON.parse($window.localStorage['fav']);
} else {
    $scope.favorites = [];
}

$scope.togglefav = function(index) {
    fav.push(index);
    console.log(fav);
    $window.localStorage['fav'] = JSON.stringify(fav);
}
})

// modal controller that holds the enlarged office view and map view
.controller('ModalCtrl', function($scope, $ionicModal) {
  $ionicModal.fromTemplateUrl('templates/modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });
})

// pass $index from offices.json array into new array then stringify the new array
/*.controller('ToggleFav', function($scope, $window, $localstorage){
var fav = [];
  $scope.togglefav = function(index, liked) {
    var flag = liked;
  if(flag==true){
    fav.push(index);
    console.log(fav);
    $window.localstorage['fav'] = JSON.stringify(fav);
    //$window.localstorage['flag'] = JSON.stringify(flag);
    console.log($window.localstorage);
  return fav;
  }
  else{
    alert("already added");
  }
  }
})*/

/*.controller('FavAdd', function($scope, $window, $localstorage, $http){
  var fav = JSON.parse($window.localstorage['fav'] || '[]')
  console.log(fav);
  console.log($window.localstorage);
});*/