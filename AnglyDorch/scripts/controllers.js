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

        $scope.go = function (route) {
            $location.path(route);
        };
        refresh();
    }])

    .controller('viewTeamController', ['$scope', '$routeParams',
    function ($scope, $routeParams) {
        // create a message to display in our view
        $scope.message = $routeParams.ID;
    }]);
   
})();
