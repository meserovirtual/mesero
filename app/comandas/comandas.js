(function () {
  'use strict';
  var scripts = document.getElementsByTagName("script");
  var currentScriptPath = scripts[scripts.length - 1].src;

  angular.module('myApp.comandas', ['ngRoute'])
    .controller('ComandasCtrl', ComandasCtrl);


  ComandasCtrl.$inject = ['$scope'];
  function ComandasCtrl($scope) {

    var vm = this;

  }

})();