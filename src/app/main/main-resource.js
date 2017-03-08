angular.module('shoppingCart')
/**
 * @ngdoc service
 * @name shoppingCart.service: mainResource
 * @requires $resource
 * @description:
 * service makes the API call
 */
.factory('mainResource', function ($resource) {
    return $resource( '/api/' + ':action', {
        action: '@action'
    }, {
        productList: {
            method: 'GET'
        }
    });
});