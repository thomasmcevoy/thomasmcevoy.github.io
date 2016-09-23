<div class="music-player">
        <ul class="music-player--albums">
          <li class="music-player--album" ng-repeat="album in albums" ng-init="player.playlist.add(album)" ng-class="{current: player.current.album == $index}">
            <div class="music-player--album-title">{{album.title | uppercase}}</div>
            <ul class="music-player--tracks">
              <li class="music-player--track" ng-repeat="track in album.tracks" ng-class="{current: player.current.track == $index && (!player.pristine || player.paused)}" ng-click="player.play($index, $parent.$index)">{{track.title | uppercase}}</li>
            </ul>
          </li>
        </ul>
        <ul class="music-player--controls">
          <li class="music-player--controls--prev-button" ng-click="player.previous()">
            <svg xmlns="http://www.w3.org/2000/svg" width="213" height="132" viewBox="0 0 213 132">
              <path fill="none" stroke="#bf9600" stroke-width="3.5" d="M108.418 66l99 61V5zM4 66l99.293 61V5zM108.418 66l99 61V5z"/>
            </svg>
          </li>
          <li class="music-player--controls--play-button" ng-show="!player.playing" ng-click="player.play()">
            <svg width="105.469" height="131.621" viewBox="0 0 105.469 131.621">
              <path fill="none" stroke="#bf9600" stroke-width="2.5" d="M1.25 2.255V129.37l101.858-63.49z"/>
            </svg>
          </li>
          <li class="music-player--controls--pause-button" ng-show="player.playing" ng-click="player.pause()">
            <svg width="105.469" height="131.621" viewBox="0 0 105.469 131.621">
              <path fill="none" stroke="#bf9600" stroke-width="2.5" d="M13.25 1.25h23.652V131.46H13.25zM68.132 1.25h23.652V131.46H68.132z"/>
            </svg>
          </li>
          <li class="music-player--controls--next-button" ng-click="player.next()">
            <svg xmlns="http://www.w3.org/2000/svg" width="213" height="132" viewBox="0 0 213 132">
              <path fill="none" stroke="#bf9600" stroke-width="3.5" d="M4 5v122l99-61zM108.125 5v122l99.292-61zM4 5v122l99-61z"/>
            </svg>
          </li>
        </ul>
        <ul class="music-player--progress">
          <li class="music-player--progress--current-time" ng-hide="player.pristine">{{player.currentTime() | mmss}}</li>
          <li class="music-player--progress--bar">
            <span class="music-player--progress--bar--seek" ng-style="{width: player.progress_percent + '%'}"></span>
          </li>
          <li class="music-player--progress--duration" ng-hide="player.pristine">{{player.currentDuration() | mmss}}</li>
        </ul>
      </div>
