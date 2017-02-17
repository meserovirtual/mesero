(function () {
    'use strict';
    var scripts = document.getElementsByTagName("script");
    var currentScriptPath = scripts[scripts.length - 1].src;

    angular.module('myApp.deudores', ['ngRoute'])
        .controller('DeudoresCtrl', DeudoresCtrl);


    DeudoresCtrl.$inject = ['$scope'];
    function DeudoresCtrl($scope) {

        var vm = this;

    }

})();