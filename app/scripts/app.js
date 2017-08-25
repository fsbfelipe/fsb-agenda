'use strict';

angular
    .module('agendaApp', ['ngAnimate','ngAria','ngCookies','ngMessages','ngResource','ngRoute','ngSanitize','ngTouch','toastr'])
    .config(function ($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('');

        $routeProvider
            .when('/', {
                templateUrl: 'views/contato.html',
                controller: 'ContatoCtrl'
            })
            .when('/cadastro/:id?', {
                templateUrl: 'views/cadastro.html',
                controller: 'CadastroCtrl'
            })
            .when('/documentacao/', {
                templateUrl: 'views/documentacao.html',
                controller: 'DocumentacaoCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
