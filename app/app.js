require('angular')

angular.module('app', [])

app.controller('MainController', ['$scope'] function($scope) {
    $scope.message = 'Hello from MainController'
}