(function() {
  'use strict';

  function mmss () {
    return function(input) {
      var mm = Math.floor(input / 60),
      ss = Math.floor(input) - (mm * 60);

      if (ss < 10) ss = '0' + ss;

      return mm + ':' + ss;
    };
  }

  angular
    .module('app')
    .filter('mmss', mmss);

})();
