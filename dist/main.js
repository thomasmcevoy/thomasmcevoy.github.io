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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts */ \"./src/scripts/index.js\");\n\n\nObject(_scripts__WEBPACK_IMPORTED_MODULE_0__[\"initExpandables\"])()\nObject(_scripts__WEBPACK_IMPORTED_MODULE_0__[\"initScroll\"])()\nObject(_scripts__WEBPACK_IMPORTED_MODULE_0__[\"initPlayer\"])()\nObject(_scripts__WEBPACK_IMPORTED_MODULE_0__[\"initModal\"])()\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/scripts/expandables.js":
/*!************************************!*\
  !*** ./src/scripts/expandables.js ***!
  \************************************/
/*! exports provided: initExpandables */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initExpandables\", function() { return initExpandables; });\nfunction initExpandables() {\n  if (!window.matchMedia) return\n\n  if (window.matchMedia('(min-width: 750px)').matches) {\n    document.getElementById('about')\n      .querySelector('.expandable')\n      .classList.remove('expandable')\n  }\n\n  const expandables = document.querySelectorAll('.expandable')\n  expandables.forEach((el, _) => {\n    const button = document.createElement('button')\n    button.innerHTML = 'SHOW MORE'\n    button.addEventListener('click', toggleExpand)\n    el.parentNode.appendChild(button)\n    el.classList.add('is-collapsed')\n  })\n}\n\nfunction toggleExpand(e) {\n  const button = e.target\n  const el = button.previousElementSibling\n\n  el.classList.toggle('is-expanded')\n  el.classList.toggle('is-collapsed')\n\n  if (button.innerHTML === 'SHOW MORE') button.innerHTML = 'SHOW LESS'\n  else button.innerHTML = 'SHOW MORE'\n}\n\n\n//# sourceURL=webpack:///./src/scripts/expandables.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/*! exports provided: initExpandables, initModal, initPlayer, initScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _expandables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expandables */ \"./src/scripts/expandables.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"initExpandables\", function() { return _expandables__WEBPACK_IMPORTED_MODULE_0__[\"initExpandables\"]; });\n\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ \"./src/scripts/modal.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"initModal\", function() { return _modal__WEBPACK_IMPORTED_MODULE_1__[\"initModal\"]; });\n\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ \"./src/scripts/player.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"initPlayer\", function() { return _player__WEBPACK_IMPORTED_MODULE_2__[\"initPlayer\"]; });\n\n/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scroll */ \"./src/scripts/scroll.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"initScroll\", function() { return _scroll__WEBPACK_IMPORTED_MODULE_3__[\"initScroll\"]; });\n\n\n// export { initForm } from './form'\n\n\n\n\n//# sourceURL=webpack:///./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/modal.js":
/*!******************************!*\
  !*** ./src/scripts/modal.js ***!
  \******************************/
/*! exports provided: initModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initModal\", function() { return initModal; });\nconst modal = document.createElement('div')\nconst overlay = document.createElement('div')\nconst content = document.createElement('div')\n\nmodal.setAttribute('id', 'modal')\noverlay.setAttribute('id', 'overlay')\ncontent.setAttribute('id', 'content')\n\nconst initModal = () => {\n  modal.style.zIndex = -1\n  overlay.style.zIndex = -1\n  modal.addEventListener('click', () => hideModal())\n  overlay.addEventListener('click', () => hideModal())\n  modal.appendChild(content)\n\n  const fragment = document.createDocumentFragment()\n    .appendChild(overlay)\n    .appendChild(modal)\n  document.getElementsByTagName('body')[0].appendChild(fragment)\n}\n\nconst showModal = newContent => {\n  content.innerHTML = ''\n  content.appendChild(newContent)\n  modal.style.zIndex = 2\n  overlay.style.zIndex = 1\n}\n\nconst hideModal = () => {\n  modal.style.zIndex = -1\n  overlay.style.zIndex = -1\n}\n\n\n//# sourceURL=webpack:///./src/scripts/modal.js?");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/*! exports provided: initPlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initPlayer\", function() { return initPlayer; });\n//\n// To do:\n//\n// - Fix bug where changing track when paused, then pressing play button\n//   does not produce the desired result.\n//\n// - Refactor?\n// \n\nlet _playlist = []\nlet _currentTrack = 0\nlet _isPlaying = false\nlet _isPaused = false\nlet _currentTime = 0\nlet _duration = 0\n\nconst html = document.getElementsByTagName('html')[0]\nconst audio = document.createElement('audio')\nconst playlist = document.getElementById('playlist')\nconst songs = document.querySelectorAll('.song')\nconst playButton = document.getElementById('play')\nconst pauseButton = document.getElementById('pause')\nconst nextButton = document.getElementById('next')\nconst previousButton = document.getElementById('previous')\nconst seekBar = document.getElementById('seekBar')\nconst durationElement = document.getElementById('duration')\nconst currentTimeElement = document.getElementById('currentTime')\n\nconst formatTime = seconds => {\n  const m = Math.floor( seconds / 60 )\n  let ss = Math.floor( seconds - m * 60 )\n  if (ss < 10) ss = '0' + ss\n  return m.toString(10) + ':' + ss.toString(10)\n}\n\nconst initPlayer = () => {\n  songs.forEach((song, i) => {\n    _playlist[i] = song.getAttribute('href')\n    song.removeAttribute('href')\n    song.setAttribute('data-track', i)\n    song.addEventListener('click', e => play(e.target.getAttribute('data-track')))\n  })\n\n  playlist.appendChild(audio)\n\n  playButton.addEventListener('click', play)\n  pauseButton.addEventListener('click', pause)\n  nextButton.addEventListener('click', next)\n  previousButton.addEventListener('click', previous)\n  audio.addEventListener('ended', next)\n  audio.addEventListener('loadedmetadata', () => {\n    _duration = audio.duration;\n    durationElement.innerHTML = formatTime(_duration)\n    currentTimeElement.innerHTML = formatTime(_currentTime)\n  })\n  audio.addEventListener('timeupdate', () => {\n    _currentTime = audio.currentTime\n    currentTimeElement.innerHTML = formatTime(_currentTime)\n    seekBar.style.width = (_currentTime / _duration * 100) + '%'\n  })\n}\n\nconst togglePlayPause = () => {\n  playButton.classList.toggle('inactive')\n  pauseButton.classList.toggle('inactive')\n}\n\nconst reset = () => {\n  _duration = 0\n  _currentTime = 0\n  _isPaused = false\n  _isPlaying = false\n  durationElement.innerHTML = formatTime(_duration)\n  currentTimeElement.innerHTML = formatTime(_currentTime)\n  seekBar.style.width = 0\n}\n\nconst play = (track) => {\n  let current = songs[_currentTrack]\n  \n  if (track && track !== _currentTrack) {\n    current.classList.remove('song--current')\n    _currentTrack = parseInt(track, 10)\n    current = songs[_currentTrack]\n    _isPaused = false\n  }\n\n  if (!_isPlaying) {\n    togglePlayPause()\n    _isPlaying = true\n  }\n\n  if (!_isPaused) {\n    audio.setAttribute('src', _playlist[_currentTrack])\n    current.classList.add('song--current')\n  } \n  else _isPaused = false\n\n  audio.play()\n}\n\nconst pause = () => {\n  togglePlayPause()\n  _isPlaying = false\n  _isPaused = true\n  audio.pause()\n}\n\nconst next = () => {\n  songs[_currentTrack].classList.remove('song--current')\n  _currentTrack = _currentTrack < _playlist.length - 1 ? _currentTrack + 1 : 0\n  songs[_currentTrack].classList.add('song--current')\n\n  if (_isPlaying) play()\n  else reset()\n}\n\nconst previous = () => {\n  if (_isPlaying && _currentTime > 3) _currentTime = 0\n  else {\n    songs[_currentTrack].classList.remove('song--current')\n    _currentTrack = _currentTrack > 0 ? _currentTrack - 1 : _playlist.length - 1\n    songs[_currentTrack].classList.add('song--current')\n  }\n\n  if (_isPlaying) play()\n  else reset()\n}\n\n\n//# sourceURL=webpack:///./src/scripts/player.js?");

/***/ }),

/***/ "./src/scripts/scroll.js":
/*!*******************************!*\
  !*** ./src/scripts/scroll.js ***!
  \*******************************/
/*! exports provided: initScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initScroll\", function() { return initScroll; });\nconst initScroll = () => {\n  document.querySelectorAll('.nav-link').forEach((navLink, i) => {\n    const scrollTarget = document.querySelector(navLink.getAttribute('href'))\n    navLink.addEventListener('click', e => {\n      e.preventDefault()\n      scrollTarget.scrollIntoView({ \n        behavior: 'smooth',\n        block: 'start'\n      })\n    })\n  })\n}\n\n\n//# sourceURL=webpack:///./src/scripts/scroll.js?");

/***/ })

/******/ });