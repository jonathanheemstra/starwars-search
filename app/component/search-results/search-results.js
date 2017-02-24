'use strict';

module.exports = {
  template: require('./search-results.html'),
  controller: [SearchResultsController],
  controllerAs: 'searchResultsCtrl',
  bindings: {
    results: '<'
  }
};

function SearchResultsController() {

}
