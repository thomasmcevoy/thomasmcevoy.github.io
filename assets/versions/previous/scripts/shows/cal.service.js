(function() {
  'use strict';

  function calService ($window, $timeout) {
    var cal,
        mlq      = $window.matchMedia('(orientation: portrait) and (max-width: 749px)'),
        numCols  = mlq.matches ? 2 : 3,
        showMore = false,
        label    = 'SHOW MORE';

    cal = {
      mlq: mlq,

      numCols: numCols,

      showMore: showMore,

      label: label,

      toggle: function() {
        var that = this;

        that.showMore = !this.showMore;

        $timeout(function() {
          if(that.label == 'SHOW MORE') that.label = 'SHOW LESS';
          else that.label = 'SHOW MORE';
        }, 500);
      }
    };

    return cal;
  }

  angular
    .module('app.shows')
    .factory('calService', calService);

})();
