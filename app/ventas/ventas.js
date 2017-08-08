(function () {
    'use strict';
    var scripts = document.getElementsByTagName("script");
    var currentScriptPath = scripts[scripts.length - 1].src;

    angular.module('myApp.ventas', ['ngRoute'])
        .controller('VentasCtrl', VentasCtrl);


    VentasCtrl.$inject = ['$scope'];
    function VentasCtrl($scope) {

        var vm = this;

    }

})();