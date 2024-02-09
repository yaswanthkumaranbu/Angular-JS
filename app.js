const demo = angular.module("demo", []);
demo.controller("demoCtrl", function ($scope) {
  $scope.title = "Anime world";
  $scope.data = [];
  $scope.submit = function () {
    if ($scope.firstName && $scope.lastName && $scope.jobTitle && $scope.yoe) {
      $scope.data.push({
        firstName: $scope.firstName,
        lastName: $scope.lastName,
        jobTitle: $scope.jobTitle,
        yoe: $scope.yoe,
      });
      $scope.firstName = "";
      $scope.lastName = "";
      $scope.jobTitle = "";
      $scope.yoe = "";
    }
  };
});
