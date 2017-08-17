(function () {
    'use strict';
    var scripts = document.getElementsByTagName("script");
    var currentScriptPath = scripts[scripts.length - 1].src;

    angular.module('myApp.reservas', ['ngRoute'])
        .controller('ReservasCtrl', ReservasCtrl);

    ReservasCtrl.$inject = ['$scope'];
    function ReservasCtrl($scope) {

        var vm = this;

    }

})();