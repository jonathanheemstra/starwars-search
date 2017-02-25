'use strict';

module.exports = function() {
  return function(characters, searchTerm) {
    let fuzzyRegex = genFuzzyRegex(searchTerm);
    return characters.filter(searchResults => {
      return fuzzyRegex.test(searchResults.gender.toLowerCase());
    });
  };
};

function genFuzzyRegex(input) {
  if(!input) return /.*/;

  let fuzzyString = '^' + input.toLowerCase().split('').join('');
  return new RegExp(fuzzyString);
}
