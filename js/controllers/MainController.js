app.controller('MainController', ['$scope','places','ngRoute', function($scope,places) {
  
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
    * use service 'places' instead of hard coding
    * use the places service to fetch marker data from the Wikipedia API
    * Create a new file js/vendor/helpers.js. 
      * Copy all the code from this JavaScript file and paste it into your js/vendor/helpers.js. Then include it as as a new <script>. We'll use the geodataToMarkers() function to format the Wikipedia API's output so that we can use it in the map.
    * Add 'places' into MainController as a dependency so that it's available to use.
    * Then use places within the controller to asynchronously fetch the places data from the server, and store it into $scope.geodata.
    * Use thegeodataToMarkers() function to format $scope.geodata, and store that output into $scope.mapMarkers, like this:
      * $scope.mapMarkers = geodataToMarkers($scope.geodata);
    * In the view, pass mapMarkers into the <leaflet> directive's markers attribute.
    */

    places.success(function(data) {
      $scope.geodata = data;
      $scope.mapMarkers = geodataToMarkers($scope.geodata);
    });

  ///////////////////////////////////////////////
  /////     END MARKERS ATTRIBUTE
  ///////////////////////////////////////////////  

}]);