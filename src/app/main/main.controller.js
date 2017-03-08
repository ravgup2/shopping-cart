(function() {
  'use strict';

  angular
    .module('shoppingCart')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(mainResource) {
    var vm = this;
    vm.selectedProduct = {};
    var svcParams = {
        'action': 'products'
    };

    vm.selectProduct = function (item) {
      vm.selectedProduct = item;
    }

    vm.showPrice = function() {
      alert(vm.selectedProduct.pricing.price.retail);
    }
    var success = function (response) {
      vm.productList = response.productList;
      vm.selectedProduct = vm.productList[0];
    };

    var failure = function () {
    };

    mainResource.productList(svcParams,
        success, failure).$promise.finally(function () {
    });
  }
})();
