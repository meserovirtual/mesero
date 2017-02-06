(function () {
    'use strict';
    var scripts = document.getElementsByTagName("script");
    var currentScriptPath = scripts[scripts.length - 1].src;

    angular.module('myApp.depositos', ['ngRoute', ['bower_components/mv-angular-cajas/mv-depositos.js']])
        .controller('DepositosCtrl', DepositosCtrl);


    DepositosCtrl.$inject = ['$scope'];
    function DepositosCtrl($scope) {

        var vm = this;

    }

})();