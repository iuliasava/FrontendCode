var hrApp = angular.module("hrApp", ['ngRoute']);
hrApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/colors', {
            templateUrl: '../colors.html',
            controller: 'ColorsController'
        }).

        when('/form', {
            templateUrl: '../form.html',
            controller: 'FormController'
        });

    }]);