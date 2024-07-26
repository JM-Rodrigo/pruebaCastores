
var app = angular.module('myApp', []);

app.controller('LogginCtrl', ['$scope', function($scope) {
    $scope.login = function() {
        var user = {
            nombre: $scope.username,
            password: $scope.password
        };

        $http.post('/login', user).then(function(response) {
            alert('Login correcto');
        }, function(error) {
            alert('Login fallido');
        });
    };
}]);


