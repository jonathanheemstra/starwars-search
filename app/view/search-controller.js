'use strict';

module.exports = ['$log', '$scope', 'searchService', SearchController];

function SearchController($log, $scope, searchService) {

  this.searchResults = [];

  $scope.$watch('searchTerm', function() {
    searchService.getPeople($scope.searchTerm)
    .then( people => {
      $scope.searchResults = people;
    });
  });
}
