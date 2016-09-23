(function() {
  'use strict';

  function ModalController ($scope, close) {
    $scope.display = true;

    $scope.close = function() {
      $scope.display = false;
      close();
    };
  }

  angular
    .module('app.contact')
    .controller('ModalController', ModalController);

})();
