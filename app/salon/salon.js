(function () {
    'use strict';
    var scripts = document.getElementsByTagName("script");
    var currentScriptPath = scripts[scripts.length - 1].src;

    angular.module('myApp.salon', ['ngRoute'])
        .controller('SalonCtrl', SalonCtrl);

    SalonCtrl.$inject = ['$scope'];
    function SalonCtrl($scope) {

        var vm = this;

    }

})();