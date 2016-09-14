angular.module('publicRoutes', [])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: 'views/home.html',
                controller: "MainController"
            })
    })
    .animation('.app-view', function () {
        return {
            enter: function (element, done) {
                element.delay(3000);
                element.css('display', 'none');
                element.fadeIn(3000, done);
                return function () {
                    element.stop();
                }
            },
            leave: function (element, done) {
                element.fadeOut(1000, done);
                return function () {
                    element.stop();
                }
            }
        }
    });
