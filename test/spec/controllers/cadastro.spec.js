'use strict';
describe('Teste do controller da tela de cadastro', function () {
    beforeEach(module('agendaApp'));

    var CadastroCtrl, scope, rootScope;

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        rootScope = $rootScope;

        CadastroCtrl = $controller('CadastroCtrl', {
            $scope: scope,
            $rootScope: rootScope
        });
    }));

    it('deve definir a tela atual na barra de navegacao', function () {
        expect(rootScope.tela).toBe("cadastro");
    });

    it('deve preencher a data atual ao iniciar o formulario', function () {
        var agora = new Date().getTime();
        expect(scope.contato.dataCadastro).toBeDefined();
        expect(agora - scope.contato.dataCadastro.getTime()).toBeLessThan(1000);
    });

});
