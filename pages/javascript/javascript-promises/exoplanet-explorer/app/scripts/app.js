// Inline configuration for jshint below. Prevents `gulp jshint` from failing with quiz starter code.
/* jshint unused: false */

(function(document) {
  'use strict';

  let home = null;

  /**
   * Helper function to create a planet thumbnail - Promisified version!
   * @param  {Object} data - The raw data describing the planet.
   */
  function addSearchHeader(query) {
    home.innerHTML = '<h2 class="page-title">query: ' + query + '</h2>';
  }

  /**
   * Helper function to create a planet thumbnail.
   * @param  {Object} data - The raw data describing the planet.
   */
  function createPlanetThumb(data) {
    return new Promise(function (resolve) {
      const pT = document.createElement('planet-thumb');
      for (const d in data) {
        pT[d] = data[d];
      }
      home.appendChild(pT);
      resolve();
    });
  }

  /**
   * XHR wrapped in a promise.
   * @param  {String} url - The URL to fetch.
   * @return {Promise}    - A Promise that resolves when the XHR succeeds and fails otherwise.
   */
  function getWithXhr(url) {
    return new Promise(function(resolve, reject) {
      const req = new XMLHttpRequest();
      req.open('GET', url);
      req.onload = function() {
        if (req.status === 200) {
          resolve(req.response);
        } else {
          reject(Error(req.statusText));
        }
      };
      req.onerror = function() {
        reject(Error('Network Error'));
      };
      req.send();
    });
  }

  /**
   * Alternative method to {@code #get(url)}.
   */
  function get(url) {
    return fetch(url, {
      method: 'get'
    });
  }

  /**
   * Performs an XHR for a JSON and returns a parsed JSON response.
   * @param  {String} url - The JSON URL to fetch.
   * @return {Promise}    - A promise that passes the parsed JSON response.
   */
  function getJson(url) {
    return get(url).then(function(response) {
      return response.json();
    });
  }

  window.addEventListener('WebComponentsReady', function() {
    home = document.querySelector('section[data-route="home"]');

    getJson('../data/earth-like-results.json')
      .then(function(response) {
        // .map executes all of the network requests immediately.
        const arrayOfPromises = response.results
          .map(function (result) {
            return getJson(result);
          });

        let sequence = Promise.resolve();
        arrayOfPromises.forEach(function(request) {
          // loop through the pending requests and render them in order
          sequence = sequence.then(function() {
            // request is a getJson call that's currently executing;
            // createPlanetThumb will wait for it to resolve
            return request.then(createPlanetThumb);
          });
        });
      });
  });
})(document);
