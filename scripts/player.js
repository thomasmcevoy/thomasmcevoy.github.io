import $ from 'jquery';

// Player variables
let _playlist = [];
let _currentTrack = 0;
let _isPlaying = false;
let _isPaused = false;
let _currentTime = 0;
let _duration = 0;
let _format;

// Cached jQuery selectors
const $audio = $( '<audio>' );
const $playlist = $( '#playlist' );
const $songs = $playlist.find( '.song' );
const $playButton = $( '#play' );
const $pauseButton = $( '#pause' );
const $nextButton = $( '#next' );
const $previousButton = $( '#previous' );
const $seekBar = $( '#seekBar' );
const $durationElement = $( '#duration' );
const $currentTimeElement = $( '#currentTime' );


// Methods
function timeFilter( seconds ) {
  const m = Math.floor( seconds / 60 );
  let ss = Math.floor( seconds - m * 60 );

  if (ss < 10) ss = '0' + ss;

  return m.toString(10) + ':' + ss.toString(10);
}

export function initializePlayer() {
  _format = Modernizr.audio.mp3 ? 'mp3' :
            Modernizr.audio.ogg ? 'ogg' : undefined

  if (!_format) {
    $( 'html' ).addClass( 'no-audio' );
    return;
  }

  // Build playlist from songs href attributes, convert anchors to data-track
  // js hooks, and add click event listeners to play them.
  for (let i = 0; i < $songs.length; i++) {
    const $song = $songs.eq( i );
    _playlist[i] = $song.attr( 'href' ).slice(0, -3) + _format;
    $song.removeAttr( 'href' ).attr( 'data-track', i ).click( play );
  }

  // Set up audio element
  $playlist.append( $audio );

  // Events
  $playButton.click( play );
  $pauseButton.click( pause );
  $nextButton.click( next );
  $previousButton.click( previous );
  $audio.on( 'ended', next );
  $audio.on( 'loadedmetadata', () => {
    _duration = $audio[0].duration;
    $durationElement.html( timeFilter(_duration) );
    $currentTimeElement.html( timeFilter(_currentTime) );
  });
  $audio.on( 'timeupdate', () => {
    _currentTime = $audio[0].currentTime;
    $currentTimeElement.html( timeFilter(_currentTime) );
    $seekBar.css( 'width', (_currentTime / _duration * 100) + '%' );
  });
}

function togglePlayPause() {
  $playButton.toggleClass( 'inactive' );
  $pauseButton.toggleClass( 'inactive' );
}

function set() {
  _isPlaying = false;
  _isPaused = false;
  _currentTime = 0;
  _duration = 0;
  $durationElement.html( timeFilter(_duration) );
  $currentTimeElement.html( timeFilter(_currentTime) );
  $seekBar.css( 'width', 0 );
}

function play( event ) {
  if (!_playlist.length) return;

  let $current = $songs.eq( _currentTrack );

  if (event) {
    const $target = $( event.target );
    if ($target.is( '.song' )) {
      const track = $target.attr( 'data-track' );
      if (track != _currentTrack) {
        $current.removeClass( 'song--current' );
        _currentTrack = parseInt(track, 10);
        $current = $songs.eq( _currentTrack );
        _isPaused = false;
      }
    }
  }

  if (!_isPlaying) {
    togglePlayPause();
    _isPlaying = true;
  }

  if (!_isPaused) {
    $audio.attr( 'src', _playlist[_currentTrack] );
    $current.addClass( 'song--current' );
  } else {
    _isPaused = false;
  }

  $audio[0].play();
}

function pause() {
  togglePlayPause();
  _isPlaying = false;
  _isPaused = true;
  $audio[0].pause();
}

function next() {
  $songs.eq( _currentTrack ).removeClass( 'song--current' );
  _currentTrack = _currentTrack < _playlist.length - 1 ? _currentTrack + 1 : 0;
  $songs.eq( _currentTrack ).addClass( 'song--current' );

  if (_isPlaying) {
    play();
  } else {
    set();
  }
}

function previous() {
  if (_isPlaying && _currentTime > 3) {
    _currentTime = 0;
  } else {
    $songs.eq( _currentTrack ).removeClass( 'song--current' );
    _currentTrack = _currentTrack > 0 ? _currentTrack - 1 : _playlist.length - 1;
    $songs.eq( _currentTrack ).addClass( 'song--current' );
  }

  if (_isPlaying) {
    play();
  } else {
    set();
  }
}
