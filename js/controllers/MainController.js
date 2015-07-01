app.controller('MainController', ['$scope', function($scope) {
  
  // The <leaflet> directive can take information about the map's position through the center attribute
  $scope.mapCenter = {
    lat: 40.741934,
    lng: -74.004897,
    zoom: 17
  };

}]);