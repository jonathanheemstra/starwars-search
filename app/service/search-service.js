'use strict';

module.exports = ['$q', '$log', '$http', searchService];

function searchService($q, $log, $http) {
  $log.debug('searchService');

  let service = {};
  service.people = [];

  service.getPeople = function() {
    $log.debug('searchService.getPeople()');

    let url = 'http://swapi.co/api/people/';
    let config = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    };

    return $http.get(url, config)
    .then( res => {
      service.people = res.data;
      return service.people;
    })
    .catch( err => {
      return $q.reject(err);
    });
  };

  return service;
}
