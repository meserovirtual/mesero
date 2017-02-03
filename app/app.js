(function () {
    'use strict';

    angular.module('mesero', ['ngRoute'])
        .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');
            $routeProvider.otherwise({redirectTo: '/view1'});
        }])
        .controller('AppController', AppController);


    AppController.$inject = [];
    function AppController() {

        var vm = this;

    }
})();


