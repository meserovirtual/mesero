(function () {
    'use strict';
    var scripts = document.getElementsByTagName("script");
    var currentScriptPath = scripts[scripts.length - 1].src;

    angular.module('myApp.movimientos', ['ngRoute'])
        .controller('MovimientoCtrl', MovimientoCtrl);


    MovimientoCtrl.$inject = ['$scope'];
    function MovimientoCtrl($scope) {

        var vm = this;

    }

})();