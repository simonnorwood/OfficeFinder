angular.module('starter.controllers', ['ionic.utils'])

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
//$scope.fav = $window.localStorage['favs'] ? JSON.parse($window.localStorage['favs']) : []
//checks if the array if is in localstorage, if it isnt then it adds an array, if it is it parses the array
//fav is currently undefined, should show empty array, fav array is being corrupt somewhere?
if($window.localStorage['fav']){
    var fav = JSON.parse($window.localStorage['fav']);
} else {
    var fav = [];
};
console.log(fav);
$scope.togglefav = function(id) {
//checks if the id being passed in is already in the array
//if it isn't it will add it to the array then stringify it
  if (fav.indexOf(id) == -1){
    fav.push(id);
    console.log(fav);
    $window.localStorage['fav'] = JSON.stringify(fav);
    }
//if it is then it will remove it from the array and stringify the array
    else{
      fav.splice(fav.indexOf(id), 1);
      $window.localStorage['fav'] = JSON.stringify(fav);
      console.log(fav);
    }
};
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

//google maps API used to display a map view fo the office
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

//Favourites controller used to diplay the favourites
//need help with this
.controller('FavCtrl', function($scope, $window, $http){

var b = JSON.parse($window.localStorage['fav']);
console.log(b);
   $http.get('js/offices.json').then(function(resp) {
    console.log('Success', resp);
    var offices = resp.data.office;  
  }, function(err) {
    console.error('ERR', err);
    // err.status will contain the status code
  });
  $scope.query = {}
  $scope.queryBy = 'b'
})