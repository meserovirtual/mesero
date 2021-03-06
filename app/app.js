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
        'mvAvisos',
        'mvAvisosAdministracion',
        'mvNotificaciones',
        'mvComandas',
        'mvMonitor',
        'mvEnvios',
        'mvMesas',
        'mvMesasAdministracion',
        'mvPedidosAdministracion',
        'mvPedidosDetalles',
        'mvConfirmarPedidos',
        'mvPagoProveedores',
        'mvCancelarDeuda',
        'mvConsultaStock',
        'mvVentasWeb',
        'mvCampaniaMail',
        'mvPlatoMasVendido',
        'mvSalonAdministracion',
        'mvEstadisticas',
        'mvPromedioVentas',
        'mvReservas',
        'mvFactura',
        'mvTablasProduccion',
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

        $routeProvider.when('/salon/salon', {
            templateUrl: 'salon/salon.html',
            controller: 'SalonCtrl',
            data: {requiresLogin: true},
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load('salon/salon.js');
                }]
            }
        });

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

        $routeProvider.when('/settings/campania', {
            templateUrl: 'campania/campania.html',
            controller: 'CampaniaCtrl',
            data: {requiresLogin: true},
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load('campania/campania.js');
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

        $routeProvider.when('/settings/mesas', {
            templateUrl: 'mesas/mesas.html',
            controller: 'MesasCtrl',
            data: {requiresLogin: true},
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load('mesas/mesas.js');
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

        $routeProvider.when('/reportes/tablas_produccion', {
            templateUrl: 'tablas_produccion/tablas_produccion.html',
            controller: 'TablasProduccionCtrl',
            data: {requiresLogin: true},
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load('tablas_produccion/tablas_produccion.js');
                }]
            }
        });

        $routeProvider.when('/reportes/plato_mas_vendido', {
            templateUrl: 'plato_mas_vendido/plato_mas_vendido.html',
            controller: 'PlatoMasVendidoCtrl',
            data: {requiresLogin: true},
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load('plato_mas_vendido/plato_mas_vendido.js');
                }]
            }
        });

        $routeProvider.when('/reportes/estadisticas', {
            templateUrl: 'estadisticas/estadisticas.html',
            controller: 'EstadisticasCtrl',
            data: {requiresLogin: true},
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load('estadisticas/estadisticas.js');
                }]
            }
        });

        $routeProvider.when('/reportes/ventas', {
            templateUrl: 'ventas/ventas.html',
            controller: 'VentasCtrl',
            data: {requiresLogin: true},
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load('ventas/ventas.js');
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

        $routeProvider.when('/reportes/consultastock', {
            templateUrl: 'consulta_stock/consulta_stock.html',
            controller: 'ConsultaStockCtrl',
            data: {requiresLogin: true},
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load('consulta_stock/consulta_stock.js');
                }]
            }
        });

        $routeProvider.when('/carrito/pedidos', {
            templateUrl: 'pedidos/pedidos.html',
            controller: 'PedidosCtrl',
            data: {requiresLogin: true},
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load('pedidos/pedidos.js');
                }]
            }
        });

        $routeProvider.when('/carrito/confirmar', {
            templateUrl: 'confirmar/confirmar.html',
            controller: 'ConfirmarCtrl',
            data: {requiresLogin: true},
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load('confirmar/confirmar.js');
                }]
            }
        });

        $routeProvider.when('/carrito/movimientos', {
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

        $routeProvider.when('/pago/pedidosweb', {
            templateUrl: 'pedidos_web/pedidosweb.html',
            controller: 'PedidosWebCtrl',
            data: {requiresLogin: true},
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load('pedidos_web/pedidosweb.js');
                }]
            }
        });

        $routeProvider.when('/pago/reservas', {
            templateUrl: 'reservas/reservas.html',
            controller: 'ReservasCtrl',
            data: {requiresLogin: true},
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load('reservas/reservas.js');
                }]
            }
        });

        $routeProvider.when('/cocina/comandas', {
            templateUrl: 'comandas/comandas.html',
            controller: 'ComandasCtrl',
            data: {requiresLogin: true},
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load('comandas/comandas.js');
                }]
            }
        });

    }]).controller('AppCtrl', AppCtrl);

    AppCtrl.$inject = ['UserService', '$location'];
    function AppCtrl(UserService, $location) {

        var vm = this;
        vm.hideLoader = true;
        vm.sub_menu_mobile_open = false;

        vm.goToPagina = goToPagina;
        //console.log(UserService.getFromToken().data);
        vm.rol = (UserService.getFromToken().data == undefined) ? 5 : UserService.getFromToken().data.rol;


        function goToPagina(page) {
            $location.path(page);
        }

    }

})();
