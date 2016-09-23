'use strict';

(function() {

  angular.module('thomas', [
  'ngAria',
  'ngMaterial',
  'duScroll',
  'thomas.music',
  'thomas.shows',
  'thomas.contact'
  ]);

  angular.module('thomas.music', []);
  angular.module('thomas.shows', []);
  angular.module('thomas.contact', []);

})();
