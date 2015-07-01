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
*/

var app = angular.module("NearMeApp",['leaflet-directive','ngRoute']);

////////////////////////////////////////////
/////     ROUTES
///////////////////////////////////////////////
  app.config(function ($routeProvider) { 
    $routeProvider 
      .when('/', { 
        controller: 'MainController', 
        templateUrl: 'views/main.html' 
      }) 
      // .when('/photos/:id',{
      //   // maps the URL /photos/:id to the controller PhotoController and the template views/photo.html
      //   // visit localhost... click on a photo. A detail page about that photo should appear
      //   controller: 'PhotoController', 
      //   templateUrl: 'views/photo.html' 
      // })
      .otherwise({ 
        redirectTo: '/' 
      }); 
  });
///////////////////////////////////////////////
/////     END ROUTES
///////////////////////////////////////////////
