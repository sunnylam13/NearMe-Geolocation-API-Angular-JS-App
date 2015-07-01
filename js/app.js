/* 
* In js/app.js, create a new module named NearMeApp. Include it as a new <script> element, and then attach it to the <body> element.
* To use the Leaflet directive you should use the download from Github:  https://github.com/tombatossals/angular-leaflet-directive
*/

/* 
* Near Me Part 2
* The app displays places of interest on a map. When you click on a map marker, a popup with a message displays.
* http://s3.amazonaws.com/codecademy-content/projects/4/nearme-2/index.html
*
* Near Me Part 3
* http://s3.amazonaws.com/codecademy-content/projects/4/nearme-2/index.html
* Now when you click on the About link at the top right, an page with more information about the app displays.
* This version uses routing.
*
* Refactor the app to set up the controller MainController and the template views/main.html 
	* Make a new file views/main.html.
	Cut the <div class="main"< section from index.html, and paste it into views/main.html.
	* In index.html, replace the <div class="main"> with <div ng-view></div>.
	* In views/main.html, remove the ng-controller="MainController" from <div class="main">.
*
* In app.js, add another route. Map the URL /about to the controller AboutController and the template views/about.html.
	* In js/controllers/AboutController.js, create a new controller named AboutController. Include it as a new <script> element.
	* Create a template in views/about.html to display an About page. Here's what ours looks like. 
		* https://s3.amazonaws.com/codecademy-content/projects/4/nearme-3/index.html#/about
		* Write HTML in the template and CSS in css/main.css to create an About page for the app.
	* Add a link to the About page that says "Start exploring". Set the href="#/" so it links back to the map.
*/

var app = angular.module("NearMeApp",['leaflet-directive','ngRoute']);

////////////////////////////////////////////
/////     ROUTES
///////////////////////////////////////////////
  app.config(function ($routeProvider) { 
    $routeProvider 
    	// ----------------------------------------
    	// MAIN CONTROLLER ROUTE  ------------------
    	// ----------------------------------------
    		.when('/', { 
    		  controller: 'MainController', 
    		  templateUrl: 'views/main.html' 
    		}) 
    	// ----------------------------------------
    	// END MAIN CONTROLLER ROUTE  ------------------
    	// ----------------------------------------
      
    	// ----------------------------------------
    	// ABOUT PAGE ROUTE  ------------------
    	// ----------------------------------------
    		.when('/about',{
    		  // maps the URL /photos/:id to the controller PhotoController and the template views/photo.html
    		  // visit localhost... click on a photo. A detail page about that photo should appear
    		  controller: 'AboutController', 
    		  templateUrl: 'views/about.html' 
    		})
    	// ----------------------------------------
    	// END ABOUT PAGE ROUTE  ------------------
    	// ----------------------------------------
      
      .otherwise({ 
        redirectTo: '/' 
      }); 
  });
///////////////////////////////////////////////
/////     END ROUTES
///////////////////////////////////////////////
