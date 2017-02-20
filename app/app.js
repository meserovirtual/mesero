(function () {
    'use strict';

// Declare app level module which depends on views, and components
    angular.module('mesero', ['oc.lazyLoad',
        'ngRoute',
        //'ngAnimate',
        'angular-jwt',
        'auth0',
        'mvUtils',
        'mvAutocomplete',
        'mvUsuarios',
        'mvUsuariosAdministracion',
        'mvClientesAdministracion',
        'mvProveedoresAdministracion',
        'mvSucursales',
        'mvSucursalesAdministracion',
        'mvUploads',
        'mvProductos',
        'mvProductosAdministracion',
        'mvCategoriasAdministracion',
        'mvProductoTipoAdministracion',
        'mvStocks',
        'mvMovimientos',
        'mvCajas',
        'mvCobros',
        'mvResumenCajaDiaria',
        'mvAbrirCerrarCaja',
        'mvReportes',
        'mvReporteTraslado',
        'mvContacts',
        'mvEncomiendas',
        'mvTraslado',
        'mvDeudores',
        'LangTables',
        'acHelper',
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
            data: {requiresLogin: true},
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
            data: {requiresLogin: true},
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load('abrir_cerrar_caja/abrir_cerrar_caja.js');
                }]
            }
        });

        $routeProvider.when('/caja/gastos', {
            templateUrl: 'gastos/gastos.html',
            controller: 'GastosCtrl',
            data: {requiresLogin: true},
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load('gastos/gastos.js');
                }]
            }
        });

        $routeProvider.when('/caja/depositos', {
            templateUrl: 'depositos/depositos.html',
            controller: 'DepositosCtrl',
            data: {requiresLogin: true},
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load('depositos/depositos.js');
                }]
            }
        });

        $routeProvider.when('/caja/movimientos', {
            templateUrl: 'movimientos/movimientos.html',
            controller: 'MovimientoCtrl',
            data: {requiresLogin: true},
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load('movimientos/movimientos.js');
                }]
            }
        });

        $routeProvider.when('/caja/detalle_caja', {
            templateUrl: 'detalle_caja/detalle_caja.html',
            controller: 'DetalleCajaCtrl',
            data: {requiresLogin: true},
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
            data: {requiresLogin: true},
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
            data: {requiresLogin: true},
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
            data: {requiresLogin: true},
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
            data: {requiresLogin: true},
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
            data: {requiresLogin: true},
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
            data: {requiresLogin: true},
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
            data: {requiresLogin: true},
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load('productostipo/productostipo.js');
                }]
            }
        });

        $routeProvider.when('/settings/avisos', {
            templateUrl: 'avisos/avisos.html',
            controller: 'AvisosCtrl',
            data: {requiresLogin: true},
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load('avisos/avisos.js');
                }]
            }
        });

        $routeProvider.when('/working', {
            templateUrl: 'working/working.html',
            controller: 'WorkingCtrl',
            data: {requiresLogin: false},
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load('working/working.js');
                }]
            }
        });


        $routeProvider.when('/login', {
            templateUrl: 'login/login.html',
            controller: 'LoginController',
            data: {requiresLogin: false},
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load('login/login.js');
                }]
            }
        });

        $routeProvider.when('/reportes/deudores', {
            templateUrl: 'deudores/deudores.html',
            controller: 'DeudoresCtrl',
            data: {requiresLogin: true},
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load('deudores/deudores.js');
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
