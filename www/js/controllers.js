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
var c = $window.localStorage['last'];
  if (last.indexOf(id) == -1){
    last.unshift(id);
    console.log(last);
    $window.localStorage['last'] = JSON.stringify(last);
    }
    //checks if there are more than 10 items in the array
    //if there is it removes the last item from the array and adds the new one to the beginning
    else if(c.length <= 5){
    last.pop();
    last.unshift(id);
    console.log(last);
    $window.localStorage['last'] = JSON.stringify(last);
    }
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

.controller('FavCtrl', function($scope, $window, $http, $document){

var flag = false;
var b = JSON.parse($window.localStorage['fav']);
console.log(b);

$scope.ifinfav = function(d){
  if (b.indexOf(d) !== -1){
    flag = true;
    //console.log(flag);
    return flag;
  }
  else if(b.indexOf(d) == -1)
  {
    flag = false;
    return flag;
  }
}

})