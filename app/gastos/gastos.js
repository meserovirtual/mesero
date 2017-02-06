(function () {
    'use strict';
    var scripts = document.getElementsByTagName("script");
    var currentScriptPath = scripts[scripts.length - 1].src;

    angular.module('myApp.gastos', ['ngRoute', ['bower_components/mv-angular-cajas/mv-gastos.js']])
        .controller('GastosCtrl', GastosCtrl);


    GastosCtrl.$inject = ['$scope'];
    function GastosCtrl($scope) {

        var vm = this;

    }

})();