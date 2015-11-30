angular.module('starter.controllers', ['ionic.utils'])

// regions controller for testing
.controller('regionCTRL', function($scope){
	console.log("regions");
})

// api call to offices.json 
.controller('APICtrl', function($scope, $http) {
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
.controller('ToggleFav', function($scope, $window, $localstorage){
var fav = [];
$scope.togglefav = function(index, liked) {
var flag = liked;
console.log(flag);
fav.push(index);
console.log(fav);
$window.localStorage['fav'] = JSON.stringify(index);
$window.localStorage['flag'] = JSON.stringify(flag);
console.log($window.localStorage);
return fav;
}
})

.controller('FavAdd', function($scope, $window, $localstorage, $http){
var fav = JSON.parse($window.localStorage['fav'] || '[]') 
console.log(fav);
console.log($window.localStorage);
});
