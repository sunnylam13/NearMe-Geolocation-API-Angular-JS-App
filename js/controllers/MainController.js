app.controller('MainController', ['$scope', function($scope) {
  
  ////////////////////////////////////////////
  /////     CENTER ATTRIBUTE
  ///////////////////////////////////////////////
    /* 
    * The <leaflet> directive can take information about the map's position through the center attribute
    * In the view, pass mapCenter into the directive's center attribute i.e. <leaflet center="mapCenter"></leaflet>
    * EXAMPLE:  View the result in the browser. The map is now centered around the latitude and longitude 40.741934, -74.004897.
    * 
    */

    $scope.mapCenter = {
      lat: 40.741934,
      lng: -74.004897,
      zoom: 17
    };
  ///////////////////////////////////////////////
  /////     END CENTER ATTRIBUTE
  ///////////////////////////////////////////////

  ////////////////////////////////////////////
  /////     MARKERS ATTRIBUTE
  ///////////////////////////////////////////////
    /* 
    * <leaflet> directive can take information about the map's markers through the markers attribute
    * In the view, pass mapMarkers into the directive's markers attribute.
    * View the result in the browser. The map has two markers that you can click on.
    */
   
    $scope.mapMarkers = [
      {
        lat: 40.741389,
        lng: -74.003056,
        message: "111 Eighth Avenue"
      },
      {
        lat: 40.7425,
        lng: -74.006111,
        message: "Chelsea Market"
      }
    ];
  ///////////////////////////////////////////////
  /////     END MARKERS ATTRIBUTE
  ///////////////////////////////////////////////  

  



}]);