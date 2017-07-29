(function () {
    'use strict';
    var scripts = document.getElementsByTagName("script");
    var currentScriptPath = scripts[scripts.length - 1].src;

    angular.module('myApp.mesas', ['ngRoute'])
        .controller('MesasCtrl', MesasCtrl);

    MesasCtrl.$inject = ['$scope'];
    function MesasCtrl($scope) {

        var vm = this;

    }

})();