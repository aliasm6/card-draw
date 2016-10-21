
(function () {
  'use strict';
  angular.module('CardDrawApp.components.deck')
    .directive('cdDeck', DeckDirective)

    DeckDirective.$inject = ['$http'];

    function DeckDirective ($http) {
      /*jshint validthis: true */
      return {
        scope: {},
        restrict: 'E',
        controller: 'DeckController',
        controllerAs: 'vm',
        templateUrl:'./js/components/deck/deck.html'
      }

    };

})()
