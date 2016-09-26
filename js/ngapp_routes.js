angular.module('publicRoutes', [])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: 'views/home.html',
                controller: "MainController"
            })
            .when("/projects", {
                templateUrl: 'views/projects.html',
                controller: "MainController"
            });
    })
    .animation('.app-view', function () {
        return {
            enter: function (element, done) {
                element.delay(2000);
                element.css('display', 'none');
                element.fadeIn(2000, done);
                return function () {
                    element.stop();
                }
            },
            leave: function (element, done) {
                element.fadeOut(500, done);
                return function () {
                    element.stop();
                }
            }
        }
    });
