/**
 * Created by LAHIRU on 9/16/2014.
 */
var myNameSpace = angular.module('myApp', []);

myNameSpace.controller('myController', ['$scope', '$http', function ($scope, $http) {
    $http.get('lib/data/sample.json').success(function (data) {
        $scope.information = data;
    });
}]);