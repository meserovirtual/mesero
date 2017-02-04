(function () {
    'use strict';
    var scripts = document.getElementsByTagName("script");
    var currentScriptPath = scripts[scripts.length - 1].src;

    angular.module('myApp.cobros', ['ngRoute'])
        .controller('CobrosCtrl', CobrosCtrl);


    CobrosCtrl.$inject = ['$scope'];
    function CobrosCtrl($scope) {

        var vm = this;

    }

})();