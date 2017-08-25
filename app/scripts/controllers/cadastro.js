'use strict';

angular.module('agendaApp')
    .controller('CadastroCtrl', function ($scope, $rootScope, $http, $location, $routeParams, toastr) {
        var URL_API = "http://localhost:3000/api/contatos/";


        $rootScope.tela = "cadastro";
        $scope.editando = false;

        $scope.init = function () {
            if ($routeParams.id) {
                $scope.editando = true;

                $http.get(URL_API + $routeParams.id).then(function (response) {
                    $scope.contato = response.data;
                    $scope.contato.dataCadastro = new Date(response.data.dataCadastro);
                }).catch(function (error) {
                    console.log(error);
                    toastr.error("Erro ao recuperar contato"); 
                });
            } else {
                $scope.contato = {
                    dataCadastro: new Date()
                };
            }
        };


        $scope.salvar = function () {
            if ($scope.editando) {
                $http.put(URL_API + $routeParams.id, $scope.contato).then(function () {
                    toastr.success("Contato atualizado com sucesso!");
                    $location.path("/");
                }).catch(function (error) {
                    console.log(error);
                    toastr.error("Erro ao editar contato!");
                });
            } else {
                $http.post(URL_API, $scope.contato).then(function () {
                    toastr.success("Contato salvo com sucesso!");
                    $location.path("/");
                }).catch(function (error) {
                    console.log(error);
                    toastr.error("Erro ao salvar contato!");
                });

            }
        };
        $scope.init();
    });
