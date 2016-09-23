'use strict';

(function() {

  angular.module('thomas.music')


    .controller('MusicCtrl', function($scope, $http, player) {
      $scope.player = player;
      $http.get('albums.json').success(function(data) {
        $scope.albums = data;
      });
    })



    .factory('player', function(audio, $rootScope) {
      var player,
          playlist = [],
          paused = false,
          current = {
            album: 0,
            track: 0
          };

      player = {
        playlist: playlist,

        current: current,

        playing: false,

        pristine: true,

        play: function(track, album) {
          if (!playlist.length) return;

          if (angular.isDefined(track)) current.track = track;
          if (angular.isDefined(album)) current.album = album;

          if (!paused || angular.isDefined(track)) audio.src = playlist[current.album].tracks[current.track].url;
          audio.play();
          this.playing = true;
          this.pristine = false;
          paused = false;
        },

        pause: function() {
          if (player.playing) {
            audio.pause();
            this.playing = false;
            paused = true;
          }
        },

        reset: function() {
          this.pause();
          current.album = 0;
          current.track = 0;
        },

        next: function() {
          if (!playlist.length) return;
          paused = false;
          if (playlist[current.album].tracks.length > (current.track + 1)) {
            current.track++;
          } else {
            current.track = 0;
            current.album = (current.album + 1) % playlist.length;
          }
          if (player.playing) this.play();
          else {
            this.pristine = true;
            this.paused = true;
          }
        },

        previous: function() {
          if (!playlist.length) return;
          paused = false;
          if (audio.currentTime > 3) { audio.currentTime = 0; }
          else {
            if (current.track > 0) {
              current.track--;
            } else {
              current.album = (current.album - 1 + playlist.length) % playlist.length;
              current.track = playlist[current.album].tracks.length - 1;
            }
          }
          if (this.playing) this.play();
        },

        currentTime: function() {
          return audio.currentTime || 0;
        },

        currentDuration: function() {
          return parseInt(audio.duration, 10) || 0;
        }
      };

      playlist.add = function(album) {
        if (playlist.indexOf(album) != -1) return;
        playlist.push(album);
      };

      playlist.remove = function(album) {
        var index = playlist.indexOf(album);
        if (index == current.album) this.reset();
        playlist.splice(index, 1);
      };

      audio.addEventListener('ended', function() {
        $rootScope.$apply(player.next);
      }, false);

      audio.addEventListener('timeupdate', function(evt) {
        $rootScope.$apply(function() {
          player.progress = player.currentTime();
          player.progress_percent = player.progress / player.currentDuration() * 100;
        });
      });

      return player;
    })



    // extract the audio for making the player easier to test
    .factory('audio', function($document) {
      var audio = $document[0].createElement('audio');
      return audio;
    });

})();
