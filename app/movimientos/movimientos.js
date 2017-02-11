(function () {
    'use strict';
    var scripts = document.getElementsByTagName("script");
    var currentScriptPath = scripts[scripts.length - 1].src;

    //angular.module('myApp.movimientos', ['ngRoute'])
    angular.module('myApp.movimientos', ['ngRoute', ['bower_components/mv-angular-stocks/mv-traslado.js']])
        .controller('MovimientoCtrl', MovimientoCtrl);


    MovimientoCtrl.$inject = ['$scope'];
    function MovimientoCtrl($scope) {

        var vm = this;

    }

})();