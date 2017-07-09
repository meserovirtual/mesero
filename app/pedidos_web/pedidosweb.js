(function () {
    'use strict';
    var scripts = document.getElementsByTagName("script");
    var currentScriptPath = scripts[scripts.length - 1].src;

    angular.module('myApp.pedidosweb', ['ngRoute'])
        .controller('PedidosWebCtrl', PedidosWebCtrl);


    PedidosWebCtrl.$inject = ['$scope'];
    function PedidosWebCtrl($scope) {

        var vm = this;

    }

})();