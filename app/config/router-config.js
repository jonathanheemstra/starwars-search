'use strict';

module.exports = ['$stateProvider', '$urlRouterProvider', routerConfig];

function routerConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('', '/');

  let states = [
    {
      name: 'search',
      url: '/',
      template: require('../view/search.html'),
      controller: 'SearchController',
      controllerAs: 'searchCtrl'
    }
  ];

  states.forEach( state => {
    $stateProvider.state(state);
  });
}
