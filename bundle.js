/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__expandables__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scroll__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__player__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal__ = __webpack_require__(4);



// import { initForm } from './form'


Object(__WEBPACK_IMPORTED_MODULE_0__expandables__["a" /* initExpandables */])()
Object(__WEBPACK_IMPORTED_MODULE_1__scroll__["a" /* initScroll */])()
Object(__WEBPACK_IMPORTED_MODULE_2__player__["a" /* initPlayer */])()
// initForm()
Object(__WEBPACK_IMPORTED_MODULE_3__modal__["a" /* initModal */])()


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initExpandables;
function initExpandables() {
  if (!window.matchMedia) return

  if (window.matchMedia('(min-width: 750px)').matches) {
    document.getElementById('about')
      .querySelector('.expandable')
      .classList.remove('expandable')
  }

  const expandables = document.querySelectorAll('.expandable')
  expandables.forEach((el, _) => {
    const button = document.createElement('button')
    button.innerHTML = 'SHOW MORE'
    button.addEventListener('click', toggleExpand)
    el.parentNode.appendChild(button)
    el.classList.add('is-collapsed')
  })
}

function toggleExpand(e) {
  const button = e.target
  const el = button.previousElementSibling

  el.classList.toggle('is-expanded')
  el.classList.toggle('is-collapsed')

  if (button.innerHTML === 'SHOW MORE') button.innerHTML = 'SHOW LESS'
  else button.innerHTML = 'SHOW MORE'
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const initScroll = () => {
  document.querySelectorAll('.nav-link').forEach((navLink, i) => {
    const scrollTarget = document.querySelector(navLink.getAttribute('href'))
    navLink.addEventListener('click', e => {
      e.preventDefault()
      scrollTarget.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    })
  })
}
/* harmony export (immutable) */ __webpack_exports__["a"] = initScroll;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

const initPlayer = () => {
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
/* harmony export (immutable) */ __webpack_exports__["a"] = initPlayer;


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


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const modal = document.createElement('div')
const overlay = document.createElement('div')
const content = document.createElement('div')

modal.setAttribute('id', 'modal')
overlay.setAttribute('id', 'overlay')
content.setAttribute('id', 'content')

const initModal = () => {
  modal.style.zIndex = -1
  overlay.style.zIndex = -1
  modal.addEventListener('click', () => hideModal())
  overlay.addEventListener('click', () => hideModal())
  modal.appendChild(content)

  const fragment = document.createDocumentFragment()
    .appendChild(overlay)
    .appendChild(modal)
  document.getElementsByTagName('body')[0].appendChild(fragment)
}
/* harmony export (immutable) */ __webpack_exports__["a"] = initModal;


const showModal = newContent => {
  content.innerHTML = ''
  content.appendChild(newContent)
  modal.style.zIndex = 2
  overlay.style.zIndex = 1
}

const hideModal = () => {
  modal.style.zIndex = -1
  overlay.style.zIndex = -1
}


/***/ })
/******/ ]);