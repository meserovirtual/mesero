(function () {
    'use strict';

// Declare app level module which depends on views, and components
    angular.module('mesero', ['oc.lazyLoad',
        'ngRoute',
        //'ngAnimate',
        'angular-jwt',
        'auth0',
        'acUtils',
        'acAutocomplete',
        'acUsuarios',
        'acUsuariosAdministracion',
        'acClientesAdministracion',
        'acProveedoresAdministracion',
        'acSucursales',
        'acSucursalesAdministracion',
        'LangTables',
        'acUploads',
        'acProductos',
        'acProductosAdministracion',
        'acCategoriasAdministracion',
        'acProductoTipoAdministracion',
        'acStocks',
        'acMovimientos',
        'acHelper',
        'acCajas',
        'acCobros',
        'acResumenCajaDiaria',
        'acAbrirCerrarCaja',
        'acReportes',
        'acReporteTraslado',
        'acContacts',
        'acEncomiendas',
    ]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.otherwise({redirectTo: '/'});

        /*
        $routeProvider.when('/settings/controles', {
            templateUrl: 'controles/controles.html',
            controller: 'ControlesCtrl',
            //data: {requiresLogin: false},
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load('controles/controles.js');
                }]
            }
        });
        */

        $routeProvider.when('/caja/cobros', {
            templateUrl: 'cobros/cobros.html',
            controller: 'CobrosCtrl',
            //data: {requiresLogin: false},
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load('cobros/cobros.js');
                }]
            }
        });

        $routeProvider.when('/caja/abrir_cerrar_caja', {
            templateUrl: 'abrir_cerrar_caja/abrir_cerrar_caja.html',
            controller: 'AbrirCerrarCajaCtrl',
            //data: {requiresLogin: false},
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load('abrir_cerrar_caja/abrir_cerrar_caja.js');
                }]
            }
        });

        $routeProvider.when('/caja/detalle_caja', {
            templateUrl: 'detalle_caja/detalle_caja.html',
            controller: 'DetalleCajaCtrl',
            //data: {requiresLogin: false},
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load('detalle_caja/detalle_caja.js');
                }]
            }
        });

        $routeProvider.when('/settings/clientes', {
            templateUrl: 'clientes/clientes.html',
            controller: 'ClienteCtrl',
            //data: {requiresLogin: false},
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load('clientes/clientes.js');
                }]
            }
        });

        $routeProvider.when('/settings/proveedores', {
            templateUrl: 'proveedores/proveedores.html',
            controller: 'ProveedoresCtrl',
            //data: {requiresLogin: false},
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load('proveedores/proveedores.js');
                }]
            }
        });

        $routeProvider.when('/settings/usuarios', {
            templateUrl: 'usuarios/usuarios.html',
            controller: 'UsuariosCtrl',
            //data: {requiresLogin: false},
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load('usuarios/usuarios.js');
                }]
            }
        });

        $routeProvider.when('/settings/productos', {
            templateUrl: 'productos/productos.html',
            controller: 'ProductosCtrl',
            //data: {requiresLogin: false},
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load('productos/productos.js');
                }]
            }
        });

        $routeProvider.when('/settings/sucursales', {
            templateUrl: 'sucursales/sucursales.html',
            controller: 'SucursalesCtrl',
            //data: {requiresLogin: false},
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load('sucursales/sucursales.js');
                }]
            }
        });

        $routeProvider.when('/settings/categorias', {
            templateUrl: 'categorias/categorias.html',
            controller: 'CategoriasCtrl',
            //data: {requiresLogin: false},
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load('categorias/categorias.js');
                }]
            }
        });

        $routeProvider.when('/settings/productostipo', {
            templateUrl: 'productostipo/productostipo.html',
            controller: 'ProductosTipoCtrl',
            //data: {requiresLogin: false},
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load('productostipo/productostipo.js');
                }]
            }
        });

        $routeProvider.when('/working', {
            templateUrl: 'working/working.html',
            controller: 'WorkingCtrl',
            //data: {requiresLogin: false},
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load('working/working.js');
                }]
            }
        });

    }]).controller('AppCtrl', AppCtrl);

    AppCtrl.$inject = ['$scope', '$location'];
    function AppCtrl($scope, $location) {

        var vm = this;
        vm.hideLoader = true;
        vm.sub_menu_mobile_open = false;

        vm.goToPagina = goToPagina;


        function goToPagina(page) {
            $location.path(page);
        }

    }

})();
