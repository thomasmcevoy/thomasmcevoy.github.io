(function() {
  'use strict';

  function playerService ($rootScope, audio) {
    var player,
        playlist = [],
        paused = false,
        current = {
          album: 0,
          track: 0
        };

    player = {
      playlist: playlist,

      paused: paused,

      current: current,

      playing: false,

      pristine: true,

      progress: 0,

      duration: 0,

      progress_percent: 0,

      play: function(track, album) {
        if (!playlist.length) return;

        if (angular.isDefined(track)) current.track = track;
        if (angular.isDefined(album)) current.album = album;

        if (!this.paused || this.pristine || angular.isDefined(track)) audio.src = playlist[current.album].tracks[current.track].url;
        audio.play();
        this.playing = true;
        this.pristine = false;
        this.paused = false;
      },

      pause: function() {
        if (player.playing) {
          audio.pause();
          this.playing = false;
          this.paused = true;
        }
      },

      next: function() {
        if (!playlist.length) return;
        this.paused = false;
        this.progress_percent = 0;
        if (playlist[current.album].tracks.length > (current.track + 1)) {
          current.track++;
        } else {
          current.track = 0;
          current.album = (current.album + 1) % playlist.length;
        }
        if (player.playing) this.play();
      },

      previous: function() {
        if (!playlist.length) return;
        this.paused = false;
        this.progress_percent = 0;
        if (audio.currentTime > 3 && this.playing) { audio.currentTime = 0; }
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

      timeUpdate: function() {
        player.progress = audio.currentTime || 0;
        player.duration = parseInt(audio.duration, 10) || 0;
        player.progress_percent = player.progress / player.duration * 100;
      }
    };

    playlist.add = function(album) {
      if (playlist.indexOf(album) != -1) return;
      playlist.push(album);
    };

    audio.addEventListener('ended', function() {
      $rootScope.$apply(player.next);
    }, false);

    audio.addEventListener('timeupdate', function(evt) {
      $rootScope.$apply(player.timeUpdate);
    });

    return player;
  }

  angular
    .module('app.music')
    .factory('playerService', playerService);

})();
