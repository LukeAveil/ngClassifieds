(function() {

  angular
    .module('ngClassifieds')
    .controller('newClassifiedsCtrl', function($mdSidenav, $timeout, $mdDialog, classifiedsFactory) {

      var vmm = this;

      $timeout(function() {
        $mdSidenav('left').open();
      });

    });

})();
