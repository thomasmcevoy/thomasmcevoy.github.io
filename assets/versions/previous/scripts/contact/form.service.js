(function() {
  'use strict';

  function formService ($rootScope, $http, $timeout, ModalService) {
    var form,
        data,
        label = 'SEND',
        sent = false,
        sending = false;

    form = {
      data: data,

      sent: sent,

      sending: sending,

      label: label,

      submit: function(valid) {
        var that = this;

        if (valid) {
          this.sending = true;
          $http({
            url: 'scripts/send.php',
            method: 'POST',
            data: that.data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          }).success(function(data) {
            that.success();
            console.log("OK", data);
          }).error(function(data) {
            that.sending = false;
            console.log("ERR", data);
          });
        }
      },

      success: function() {
        this.sent = true;
        this.sending = false;
        this.label = 'SENT';
        this.reset();
        ModalService.showModal({
          templateUrl: "modal.html",
          controller: "ModalController"
        }).then(function(modal) {
          modal.close.then(function(result) {
            console.log(result);
          });
        });
      },

      reset: function() {
        var that = this;

        this.data.name = '';
        this.data.email = '';
        this.data.message = '';

        $timeout(function() {
          that.sent = false;
          that.label = 'SEND';
        }, 3000);
      }
    };

    return form;
  }

  angular
    .module('app.contact')
    .factory('formService', formService);

})();
