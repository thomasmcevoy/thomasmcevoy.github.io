(function() {
  'use strict';

  function ShowsController( $http, calService ) {
    var vm = this;

    vm.label    = calService.label;
    vm.toggle   = calService.toggle;
    vm.numCols  = calService.numCols;
    vm.showMore = calService.showMore;

    $http.get('shows.json').success(function(data) {
      vm.showData = data;
    });
  }

  angular
    .module('app.shows')
    .controller('ShowsController', ShowsController);

})();
