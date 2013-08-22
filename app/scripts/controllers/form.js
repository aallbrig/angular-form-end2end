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

    $scope.dateChanged = function (e) {
      //store character for evaluation
      // var character = String($scope.draft.inputDate).pop();
      // console.log('character: '+character);
      //Handler for the element
      var element = angular.element(e)
      console.log(element);
      console.log('keydown: '+element.keydown());
      console.log('id     : '+element.attr('id'));
      
      //format: mm/dd/yyyy
      if($scope.draft.inputDate.length == 2 || $scope.draft.inputDate.length == 5) {
        /*check to see if character is not a backslash.  This works
        **in conjunction with
        */
        //if(character != "/"){
          $scope.draft.inputDate = $scope.draft.inputDate + "/";
        //}
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
