(function () {
    'use strict';
    var scripts = document.getElementsByTagName("script");
    var currentScriptPath = scripts[scripts.length - 1].src;

    angular.module('myApp.confirmar', ['ngRoute'])
        .controller('ConfirmarCtrl', ConfirmarCtrl);


    ConfirmarCtrl.$inject = ['$scope'];
    function ConfirmarCtrl($scope) {

        var vm = this;

    }

})();