(function () {
    'use strict';
    var scripts = document.getElementsByTagName("script");
    var currentScriptPath = scripts[scripts.length - 1].src;

    angular.module('myApp.pedidos', ['ngRoute'])
        .controller('PedidosCtrl', PedidosCtrl);


    PedidosCtrl.$inject = ['$scope'];
    function PedidosCtrl($scope) {

        var vm = this;

    }

})();