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

//retrieves localstorage array
//$scope.favourties= JSON.parse($window.localStorage['fav']);
//$scope.favourites = $window.localStorage['favs'] ? JSON.parse($window.localStorage['favs']) : []
//checks if the array if is in localstorage, if it isnt then it adds an array, if it is it parses the array
var fav = JSON.parse($window.localStorage['fav']);
if($window.localStorage['fav']){
    $scope.favorites = JSON.parse($window.localStorage['fav']);
} else {
    $scope.favorites = [];
}

$scope.togglefav = function(id) {
  var a = JSON.parse($window.localStorage['fav']);
  console.log(a);
  if (a.indexOf(id) == -1){
    fav.push(id);
    console.log(fav);
    $window.localStorage['fav'] = JSON.stringify(fav);
    }
    else{
      a.splice(id, 1);
      $window.localStorage['fav'] = JSON.stringify(a);
    }
};

$scope.clear = function(){
  $localStorage.$reset();
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

  $scope.initmap = function() {
  var myLatLng = {lat: -25.363, lng: 131.044};

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    scrollwheel: false,
    zoom: 4
  });
}
})

.controller('FavCtrl', function($scope, $window, $http){
  
var b = JSON.parse($window.localStorage['fav']);
console.log(b);
   $http.get('js/offices.json').then(function(resp) {
    console.log('Success', resp);
    $scope.offices = resp.data.office;  
  }, function(err) {
    console.error('ERR', err);
    // err.status will contain the status code
  });
  $scope.query = []
  $scope.queryBy = b
})