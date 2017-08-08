(function () {
    'use strict';
    var scripts = document.getElementsByTagName("script");
    var currentScriptPath = scripts[scripts.length - 1].src;

    angular.module('myApp.estadisticas', ['ngRoute'])
        .controller('EstadisticasCtrl', EstadisticasCtrl);


    EstadisticasCtrl.$inject = ['$scope'];
    function EstadisticasCtrl($scope) {

        var vm = this;

    }

})();