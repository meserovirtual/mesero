(function () {
    'use strict';
    var scripts = document.getElementsByTagName("script");
    var currentScriptPath = scripts[scripts.length - 1].src;

    angular.module('myApp.masvendido', ['ngRoute'])
        .controller('PlatoMasVendidoCtrl', PlatoMasVendidoCtrl);


    PlatoMasVendidoCtrl.$inject = ['$scope'];
    function PlatoMasVendidoCtrl($scope) {

        var vm = this;

    }

})();