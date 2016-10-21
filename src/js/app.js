// sample angular code

(function() {

  'use strict';

  angular
    .module('CardDrawApp', [
      'CardDrawApp.config',
      'CardDrawApp.components.main',
      'CardDrawApp.components.hand',
      'CardDrawApp.components.deck'
    ]);

})();
