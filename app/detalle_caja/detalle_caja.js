(function () {
    'use strict';
    var scripts = document.getElementsByTagName("script");
    var currentScriptPath = scripts[scripts.length - 1].src;

    angular.module('myApp.detalleCaja', ['ngRoute'])
        .controller('DetalleCajaCtrl', DetalleCajaCtrl);


    DetalleCajaCtrl.$inject = ['$scope'];
    function DetalleCajaCtrl($scope) {

        var vm = this;

    }

})();