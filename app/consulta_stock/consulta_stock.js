(function () {
    'use strict';
    var scripts = document.getElementsByTagName("script");
    var currentScriptPath = scripts[scripts.length - 1].src;

    angular.module('myApp.consultaStock', ['ngRoute'])
        .controller('ConsultaStockCtrl', ConsultaStockCtrl);


    ConsultaStockCtrl.$inject = ['$scope'];
    function ConsultaStockCtrl($scope) {

        var vm = this;

    }

})();