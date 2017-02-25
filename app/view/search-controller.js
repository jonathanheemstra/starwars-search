'use strict';

module.exports = ['$log', '$scope', 'searchService', SearchController];

function SearchController($log, $scope, searchService) {

  $scope.genders = [];

  $scope.$watch('searchTerm', function() {
    if($scope.searchTerm === '') {
      $scope.searchResults.count = 0;
      return;
    }
    searchService.getPeople($scope.searchTerm)
    .then( people => {
      $scope.searchResults = people;
      let gendersArray = $scope.searchResults.results.map( person => {
        return person.gender;
      });
      $scope.genders = gendersArray.filter( (person, idx) => {
        return gendersArray.indexOf(person) == idx;
      });
      return $scope.genders;
    });
  });

  $scope.runSearch = function() {
    searchService.getPeople($scope.searchTerm)
    .then( people => {
      $scope.searchResults = people;
    });
  };

}
