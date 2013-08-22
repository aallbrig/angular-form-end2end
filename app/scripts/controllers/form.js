'use strict';

angular.module('angularFormEnd2endApp')
  .controller('FormCtrl', function ($scope) {
    $scope.form = {};
    $scope.form.colors = [
      "red",
      "blue",
      "green",
      "yellow",
      "orange",
      "other"
    ];
    $scope.draft = {};
    $scope.master = {};

    $scope.dateChanged = function () {
      if($scope.draft.inputDate.length == 2 || $scope.draft.inputDate.length == 5) {
        $scope.draft.inputDate = $scope.draft.inputDate + "/";
      }
    };
    $scope.save = function () {
      console.log("saved!");
      var oldForm = $scope.draft;
      $scope.master = $scope.draft;
    };
    $scope.submit = function () {
      console.log("submitted!");
    };
  });
