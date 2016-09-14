angular.module('publicRoutes', []).config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: 'views/home.html',
            controller: "MainController"
        })
});