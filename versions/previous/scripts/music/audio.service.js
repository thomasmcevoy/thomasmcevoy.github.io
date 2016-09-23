(function() {
  'use strict';

  // extract the audio for making the player easier to test
  function audio ($document) {
    var audio = $document[0].createElement('audio');
    return audio;
  }

  angular
    .module('app.music')
    .factory('audio', audio);

})();
