(function () {
    'use strict';
    var scripts = document.getElementsByTagName("script");
    var currentScriptPath = scripts[scripts.length - 1].src;

    angular.module('myApp.campania', ['ngRoute'])
        .controller('CampaniaCtrl', CampaniaCtrl);


    CampaniaCtrl.$inject = ['$scope'];
    function CampaniaCtrl($scope) {

        var vm = this;

    }

})();