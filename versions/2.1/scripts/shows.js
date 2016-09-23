'use strict';

(function() {

  angular.module('thomas.shows')


    .controller('ShowsCtrl', function($scope, $window, $http) {
      var mlq = $window.matchMedia('(orientation: portrait) and (max-width: 749px)');
      $scope.numCols = mlq.matches ? 2 : 3;
      $scope.showMore = false;
      $http.get('shows.json').success(function(data) {
        $scope.shows = data;
      });
    });



    // .directive('resize', function($window) {
    //   return function(scope, element) {
    //
    //     scope.$watch(function() {
    //       return $window.innerWidth;
    //     }, function(width) {
    //       if   (width < 600) { scope.numCols = 2; }
    //       else               { scope.numCols = 3; }
    //     }, true);
    //
    //     angular.element($window).bind('resize', function() {
    //       scope.$apply();
    //     });
    //   }
    // });

})();
