angular.module('foodGenerator')
    .directive('navbar', function () {
        return {
            restrict: "E",
            templateUrl: "components/navbar/navbar.html",
            controller: function ($scope) {
                $scope.exampleField = "Hello World!";
            }
        }
    })
;