//
// To do:
//
// - Fix bug where changing track when paused, then pressing play button
//   does not produce the desired result.
//
// - Refactor?
// 

let _playlist = []
let _currentTrack = 0
let _isPlaying = false
let _isPaused = false
let _currentTime = 0
let _duration = 0

const html = document.getElementsByTagName('html')[0]
const audio = document.createElement('audio')
const playlist = document.getElementById('playlist')
const songs = document.querySelectorAll('.song')
const playButton = document.getElementById('play')
const pauseButton = document.getElementById('pause')
const nextButton = document.getElementById('next')
const previousButton = document.getElementById('previous')
const seekBar = document.getElementById('seekBar')
const durationElement = document.getElementById('duration')
const currentTimeElement = document.getElementById('currentTime')

const formatTime = seconds => {
  const m = Math.floor( seconds / 60 )
  let ss = Math.floor( seconds - m * 60 )
  if (ss < 10) ss = '0' + ss
  return m.toString(10) + ':' + ss.toString(10)
}

export const initPlayer = () => {
  songs.forEach((song, i) => {
    _playlist[i] = song.getAttribute('href')
    song.removeAttribute('href')
    song.setAttribute('data-track', i)
    song.addEventListener('click', e => play(e.target.getAttribute('data-track')))
  })

  playlist.appendChild(audio)

  playButton.addEventListener('click', play)
  pauseButton.addEventListener('click', pause)
  nextButton.addEventListener('click', next)
  previousButton.addEventListener('click', previous)
  audio.addEventListener('ended', next)
  audio.addEventListener('loadedmetadata', () => {
    _duration = audio.duration;
    durationElement.innerHTML = formatTime(_duration)
    currentTimeElement.innerHTML = formatTime(_currentTime)
  })
  audio.addEventListener('timeupdate', () => {
    _currentTime = audio.currentTime
    currentTimeElement.innerHTML = formatTime(_currentTime)
    seekBar.style.width = (_currentTime / _duration * 100) + '%'
  })
}

const togglePlayPause = () => {
  playButton.classList.toggle('inactive')
  pauseButton.classList.toggle('inactive')
}

const reset = () => {
  _duration = 0
  _currentTime = 0
  _isPaused = false
  _isPlaying = false
  durationElement.innerHTML = formatTime(_duration)
  currentTimeElement.innerHTML = formatTime(_currentTime)
  seekBar.style.width = 0
}

const play = (track) => {
  let current = songs[_currentTrack]
  
  if (track && track !== _currentTrack) {
    current.classList.remove('song--current')
    _currentTrack = parseInt(track, 10)
    current = songs[_currentTrack]
    _isPaused = false
  }

  if (!_isPlaying) {
    togglePlayPause()
    _isPlaying = true
  }

  if (!_isPaused) {
    audio.setAttribute('src', _playlist[_currentTrack])
    current.classList.add('song--current')
  } 
  else _isPaused = false

  audio.play()
}

const pause = () => {
  togglePlayPause()
  _isPlaying = false
  _isPaused = true
  audio.pause()
}

const next = () => {
  songs[_currentTrack].classList.remove('song--current')
  _currentTrack = _currentTrack < _playlist.length - 1 ? _currentTrack + 1 : 0
  songs[_currentTrack].classList.add('song--current')

  if (_isPlaying) play()
  else reset()
}

const previous = () => {
  if (_isPlaying && _currentTime > 3) _currentTime = 0
  else {
    songs[_currentTrack].classList.remove('song--current')
    _currentTrack = _currentTrack > 0 ? _currentTrack - 1 : _playlist.length - 1
    songs[_currentTrack].classList.add('song--current')
  }

  if (_isPlaying) play()
  else reset()
}
