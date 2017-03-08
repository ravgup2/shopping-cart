(function() {
  'use strict';

  angular
    .module('shoppingCart')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
