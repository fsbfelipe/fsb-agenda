'use strict';

angular.module('agendaApp')
    .directive('rodape', function () {
        return {
            restrict: 'E',            
            template: '<div class="footer"><p> Felipe dos Santos Brito 2017</p></div>'
        };
    });
