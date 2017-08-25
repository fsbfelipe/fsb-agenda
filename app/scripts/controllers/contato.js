'use strict';
angular.module('agendaApp')
    .controller('ContatoCtrl', function ($rootScope, $scope, $location, toastr, $http) {
        var URL_API = "http://localhost:3000/api/contatos/";
        $rootScope.tela = "contato";
        
        $scope.init = function () {
            $scope.listar();
        };

        $scope.editar = function (id) {
            $location.path("/cadastro/" + id);
        };

        $scope.excluir = function (id) {
            $http.delete(URL_API+id).then(function () {
                toastr.success("Contato excluido com sucesso!");
                $scope.listar();
            }).catch(function (error) {
                console.log(error);
                toastr.error("Erro ao excluir contato!");
            });

        };

        $scope.listar = function(){
            $http.get(URL_API).then(function(response){
                $scope.contatos = response.data;
            }).catch(function(error){
                console.log(error);
                toastr.error("Erro ao recuperar lista de contatos!");
            });

        };

        $scope.selecionarContato = function(contato){
            $scope.contatoSelecionado = contato;
        };




        $scope.init();
    });
