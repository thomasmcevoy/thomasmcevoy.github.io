(function() {
  'use strict';

  function ContactController (formService, ModalService) {
    var vm = this;

    vm.data    = formService.data;
    vm.label   = formService.label;
    vm.sent    = formService.sent;
    vm.sending = formService.sending;
    vm.submit  = formService.submit;
    vm.success = formService.success;
    vm.reset   = formService.reset;
  }

  angular
    .module('app.contact')
    .controller('ContactController', ContactController);

})();
