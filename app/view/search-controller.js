'use strict';

module.exports = ['$log', 'searchService', SearchController];

function SearchController($log, searchService) {
  $log.debug('SearchController');

  this.people = [];

  this.getPeople = function() {
    searchService.getPeople()
    .then( people => {
      this.people = people;
    });
  };

  this.getPeople();
}
