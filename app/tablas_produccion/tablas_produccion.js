(function () {
    'use strict';
    var scripts = document.getElementsByTagName("script");
    var currentScriptPath = scripts[scripts.length - 1].src;

    angular.module('myApp.tablasproduccion', ['ngRoute'])
        .controller('TablasProduccionCtrl', TablasProduccionCtrl);


    TablasProduccionCtrl.$inject = ['$scope'];
    function TablasProduccionCtrl($scope) {

        var vm = this;

    }

})();