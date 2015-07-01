/* 
* Near Me Part 2
* Rather than hardcode the map markers in the controller, let's write a service to fetch them from a real API.
	* Wikipedia has added latitude/longtiude coordinates to several of their articles about places and landmarks. The Wikipedia Geodata API returns a JSON object containing an array of Wikipedia articles near a given point, in this case the latitude and longitude 40.741934, -74.004897.
		* https://en.wikipedia.org/w/api.php?action=query&list=geosearch&gsradius=5000&gscoord=40.741934%7C-74.004897&gslimit=30
	* Target:  https://en.wikipedia.org/w/api.php?action=query&list=geosearch&gsradius=5000&gscoord=40.741934%7C-74.004897&gslimit=30&format=json&callback=JSON_CALLBACK
		* Use $http.jsonp instead of $http.get.
	* 
* 
*/

app.factory('places', ['$http', function($http) { 
  return $http.jsonp('https://en.wikipedia.org/w/api.php?action=query&list=geosearch&gsradius=5000&gscoord=40.741934%7C-74.004897&gslimit=30&format=json&callback=JSON_CALLBACK') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);