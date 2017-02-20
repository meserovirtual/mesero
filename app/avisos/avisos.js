(function () {
    'use strict';
    var scripts = document.getElementsByTagName("script");
    var currentScriptPath = scripts[scripts.length - 1].src;

    angular.module('myApp.avisos', ['ngRoute'])
        .controller('AvisosCtrl', AvisosCtrl);


    AvisosCtrl.$inject = ['$scope'];
    function AvisosCtrl($scope) {

        var vm = this;

    }

})();