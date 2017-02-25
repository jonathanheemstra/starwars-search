'use strict';

module.exports = ['$q', '$log', '$http', searchService];

function searchService($q, $log, $http) {
  $log.debug('searchService');

  let service = {};

  service.getPeople = function(search) {
    $log.debug('searchService.getPeople()');

    let url = `http://swapi.co/api/people/?search=${search}`;
    let config = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    };

    return $http.get(url, config)
    .then( res => {
      return res.data;
    })
    .catch( err => {
      return $q.reject(err);
    });
  };

  return service;
}
