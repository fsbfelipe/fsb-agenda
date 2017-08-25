'use strict';

angular.module('agendaApp')
    .directive('campo', function () {
        return {
            restrict: 'E',
            scope: {
                legenda: '@',
                modelo: '=',
                tipo: '@?',
                desabilitado: '=?'
            },
            template: '<div class="form-group"><label for="{{legenda}}">{{legenda}}</label><input ng-disabled="{{desabilitado}}" ng-model="modelo" type="{{tipo ? tipo : \'text\'}}" class="form-control" id="{{legenda}}" ></div>'
        };
    });
