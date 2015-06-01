// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    'use strict';

    var app = angular.module('xPlat', ['ngRoute', 'xPlat.services', 'xPlat.controllers', 'xPlat.directives']);   //  , 'xPlat.route'
    //angular.module('xPlat', ['xPlat.services', 'xPlat.controllers', 'xPlat.directives']);
    angular.module('xPlat.directives', []);
    angular.module('xPlat.controllers', []);
    angular.module('xPlat.services', ['ngResource']);
    //angular.module('xPlat.route', ['ngRoute']);

    app.config([
        '$compileProvider',
        function ($compileProvider) {
            $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|ghttps?|ms-appx|x-wmapp0):/);
            // Use $compileProvider.urlSanitizationWhitelist(...) for Angular 1.2
            $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|ms-appx|x-wmapp0):|data:image\//);
        }
    ]);

    app.config(['$routeProvider',
      function ($routeProvider) {
          $routeProvider.
            when('/', {
                templateUrl: 'partials/teams.html',
                controller: 'teamsController'
            }).
            when('/Team', {
                templateUrl: 'partials/page.html',
                controller: 'viewTeamController'
            }).
            otherwise({
                redirectTo: '/'
            });


      }]);

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);

        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
})();
