(function() {
  'use strict';

  function AboutController( bioService ) {
    var vm = this;

    vm.label      = bioService.label;
    vm.toggle     = bioService.toggle;
    vm.showMore   = bioService.showMore;
    vm.showButton = bioService.mlq.matches;
  }

  angular
    .module('app.about')
    .controller('AboutController', AboutController);

})();
