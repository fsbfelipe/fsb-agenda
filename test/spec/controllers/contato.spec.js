'use strict';
describe('Teste do controller da tela de contatos', function () {
    beforeEach(module('agendaApp'));

    var ContatoCtrl, scope, rootScope;

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        rootScope = $rootScope.$new();

        ContatoCtrl = $controller('ContatoCtrl', {
            $scope: scope,
            $rootScope: rootScope
        });
    }));

    it('deve definir a tela atual na barra de navegacao', function () {
        expect(rootScope.tela).toBe("contato");
    });

});
