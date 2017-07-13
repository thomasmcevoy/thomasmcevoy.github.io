"use strict";
'use strict';
(function() {
  angular.module('thomas.contact').controller('ContactCtrl', function($scope, $http, form) {
    $scope.form = form;
  });
  angular.module('thomas.contact').factory('form', function($rootScope, $http, $timeout) {
    var form,
        data,
        sent = false,
        sending = false,
        value = 'SEND';
    form = {
      data: data,
      sent: sent,
      sending: sending,
      value: value,
      set: function() {
        this.data.name = '', this.data.email = '', this.data.message = '';
      },
      success: function() {
        form.sending = false;
        this.sent = true;
        this.value = 'SENT';
        this.set();
        $timeout(function() {
          form.sent = false;
          form.value = 'SEND';
        }, 5000);
      },
      submit: function() {
        form.sending = true;
        $http({
          url: './scripts/send.php',
          method: 'POST',
          data: this.data,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function(data) {
          form.success();
          console.log("OK", data);
        }).error(function(data) {
          form.sending = false;
          console.log("ERR", data);
        });
      }
    };
    return form;
  });
})();
