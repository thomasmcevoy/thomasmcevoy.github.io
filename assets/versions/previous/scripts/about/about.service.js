(function() {
  'use strict';

  function bioService( $window, $timeout ) {
    var bio,
        mlq   = $window.matchMedia('(max-width: 499px)'),
        label = 'SHOW MORE';

    bio = {
      mlq: mlq,

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

    return bio;
  }

  angular
    .module('app.about')
    .service('bioService', bioService);

})();
