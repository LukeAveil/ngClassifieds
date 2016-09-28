(function() {

  angular
    .module("ngClassifieds")
    .controller("classifiedsCtrl", function($scope, $http, classifiedsFactory, $mdSidenav) {

      classifiedsFactory.getClassifieds().then(function(classifieds) {
        $scope.classifieds = classifieds.data;
      });

      var contact = {
        name: "luke",
        phone: "98765",
        email: "lukeaveil@yahoo.com"
      };

      $scope.openSidebar = function() {
        $mdSidenav('left').open();
      };

      $scope.closeSidebar = function() {
        $mdSidenav('left').close();
      };

      $scope.saveClassified = function(classified) {
        if(classified) {
          classified.contact = contact;
          $scope.classifieds.push(classified);
          $scope.classified = {};
          $scope.closeSidebar();
        }
      };

    });
})();
