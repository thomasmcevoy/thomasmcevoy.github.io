"use strict";
'use strict';
(function() {
  angular.module('thomas.shows').controller('ShowsCtrl', function($scope, $window, $http) {
    var mlq = $window.matchMedia('(orientation: portrait) and (max-width: 749px)');
    $scope.numCols = mlq.matches ? 2 : 3;
    $scope.showMore = false;
    $http.get('shows.json').success(function(data) {
      $scope.shows = data;
    });
  });
})();
