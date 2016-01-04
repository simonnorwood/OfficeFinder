angular.module('starter.controllers', ['ionic.utils', 'uiGmapgoogle-maps'])

//.config(function($sceDelegateProvider){
//   $sceDelegateProvider.resourceUrlWhitelist([
//  'self',
//  'https://www.google.com/maps/geocoding/**']);
//})

//.controller('mapCtrl', function(NgMap, $scope) {
//  NgMap.getMap().then(function(map) {
//    $scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyBGAHnplGPjFoVvShk6Tsna3-DN8rHQBI8";
//    console.log(map.getCenter());
//    console.log('markers', map.markers);
//    console.log('shapes', map.shapes);
//  });
//})

// api call to offices.json 
.controller('APICtrl', function($scope, $http, $localstorage, $window, $state, $sce) {
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

 //$scope.sce = function(loc1){
 //return $sce.trustAsHtml("https://www.google.com/maps/geocoding/json?address=loc1&key=AIzaSyBGAHnplGPjFoVvShk6Tsna3-DN8rHQBI8")
 //}

 $scope.maps = function(loc1){
  $scope.map = { center: {latitude: 45, longitutde: -51},zoom: 8};
 }

//retrieves localstorage array
//$scope.favourties= JSON.parse($window.localStorage['fav']);
//$scope.favourites = $window.localStorage['favs'] ? JSON.parse($window.localStorage['favs']) : []
//checks if the array if is in localstorage, if it isnt then it adds an array, if it is it parses the array
if($window.localStorage['fav']){
    $scope.favorites = JSON.parse($window.localStorage['fav']);
    var fav = JSON.parse($window.localStorage['fav']);
} else {
    var fav = [];
    $window.localStorage['fav'] = JSON.stringify(fav);
}

console.log(fav);
$scope.togglefav = function(id) {
//checks if the id being passed in is already in the array
//if it isn't it will add it to the beginning array then stringify it
  if (fav.indexOf(id) == -1){
    fav.unshift(id);
    console.log(fav);
    $window.localStorage['fav'] = JSON.stringify(fav);
    }
//if it is then it will remove it from the array and stringify the array
    else{
      fav.splice(fav.indexOf(id), 1);
      $window.localStorage['fav'] = JSON.stringify(fav);
      console.log(fav);
    }
}

//last viewed office view
if($window.localStorage['last']){
    $scope.favorites = JSON.parse($window.localStorage['last']);
    var last = JSON.parse($window.localStorage['last']);
} else {
    var last = [];
    $window.localStorage['last'] = JSON.stringify(last);
}
console.log(last);
$scope.lastview = function(id) {
//checks if the id being passed in is already in the array
//if it isn't it will add it to the beginning array then stringify it
var c = JSON.parse($window.localStorage['last']);
  if (last.indexOf(id) == -1){
    if (c.length > 3){
      last.pop();
      }
    last.unshift(id);
    $window.localStorage['last'] = JSON.stringify(last);
    }
}


// used to change the favourites icon based on if its in the local storage or not
var e = JSON.parse($window.localStorage['fav']);
$scope.favicon = function(office){
 return e.indexOf(office) !== -1;
};

// used to check if the item is in localstorage and check it against the json array
// if it matches then it will return true and be displayed
// this one is used for favourited offices
$scope.ifinfav1 = function(office){
  return e.indexOf(office.id) !== -1;
};

var f = JSON.parse($window.localStorage['last']);

// this one is used for last viewed offices
$scope.ifinfav2 = function(office){
  return f.indexOf(office.id) !== -1;
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

})

.filter('mapsembed', function($sce){


})