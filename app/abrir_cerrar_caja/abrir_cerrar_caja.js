(function () {
    'use strict';
    var scripts = document.getElementsByTagName("script");
    var currentScriptPath = scripts[scripts.length - 1].src;

    angular.module('myApp.categorias', ['ngRoute'])
        .controller('AbrirCerrarCajaCtrl', AbrirCerrarCajaCtrl);


    AbrirCerrarCajaCtrl.$inject = ['$scope'];
    function AbrirCerrarCajaCtrl($scope) {

        var vm = this;

    }

})();