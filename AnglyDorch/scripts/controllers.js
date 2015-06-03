(function () {
    'use strict';
    
    angular.module("xPlat.controllers")       
    .controller('ToDoCtrl', ['$scope', 'storage', '$location', function ($scope, storage, $location) {
      
        $scope.goe = function (route) {
            // $scope.$apply(function () { $location.path(route); });
            $location.path(route);
        }

       
    }])

    .controller('teamsController', ['$scope', 'storage', '$location', function ($scope, storage, $location){
        var refresh = function () {
            $scope.Teams = storage.getAll();
        }

        $scope.go = function (route, param) {
            $location.path(route + '/' + param );
        };
        refresh();
    }])

    //.controller("viewTeamController", function ($scope, $routeParams) {
    //    $scope.message = $routeParams.Location;
    //})

    .controller('viewTeamController', ['$scope', 'storage', '$routeParams',
    function ($scope, storage, $routeParams) {
        // create a message to display in our view
        var id = $routeParams.param;
        $scope.Team = storage.getItem(id);
    }]);
   
})();
