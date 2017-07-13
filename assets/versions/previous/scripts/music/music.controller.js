(function() {
  'use strict';

  function MusicController ($http, playerService) {
    var vm = this;

    vm.player = playerService;

    $http.get('albums.json').success(function(data) {
      vm.albums = data;
    });
  }

  angular
    .module('app.music')
    .controller('MusicController', MusicController);

})();
