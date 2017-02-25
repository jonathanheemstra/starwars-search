'use strict';

module.exports = ['$log', '$scope', 'searchService', SearchController];

function SearchController($log, $scope, searchService) {

  $scope.genders = [];

  function genderObj (gender, count) {
    this.gender = gender;
    this.count = count;
  }

  $scope.$watch('searchTerm', function() {
    if($scope.searchTerm === '') {
      $scope.searchResults.count = 0;
      return;
    }
    searchService.getPeople($scope.searchTerm)
    .then( people => {
      $scope.searchResults = people;
      $scope.genders = $scope.searchResults.results.map( person => {
        return new genderObj(person.gender, 1);
        // return person.gender;
      });
    });
  });

  $scope.runSearch = function() {
    searchService.getPeople($scope.searchTerm)
    .then( people => {
      $scope.searchResults = people;
    });
  };

}
