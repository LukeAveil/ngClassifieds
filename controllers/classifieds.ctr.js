(function() {

  angular
    .module("ngClassifieds")
    .controller("classifiedsCtrl", function($scope, $http, classifiedsFactory, $mdSidenav, $mdToast, $mdDialog) {

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
          showToast("Classified Saved!");
        }
      };

      $scope.editClassified = function(classified) {
        $scope.editing = true;
        $scope.openSidebar();
        $scope.classified = classified;
      };

      $scope.saveEdit = function() {
        $scope.editing = false;
        $scope.classified = {};
        $scope.closeSidebar();
        showToast("Edit Saved!");
      };

      $scope.deleteClassified = function(event, classified) {
        var confirm = $mdDialog.confirm()
          .title('Are you sure you want to delete ' + classified.title + '?')
          .ok('Yes')
          .cancel('No')
          .targetEvent(event);
        $mdDialog.show(confirm).then(function() {
          var index = $scope.classifieds.indexOf(classified);
          $scope.classifieds.splice(index, 1);
        }, function() {

        });
      };

      function showToast() {
        $mdToast.show(
          $mdToast.simple()
          .content("classified Saved!")
          .position('top, right')
          .hideDelay(3000)
        );
      }

    });
})();
