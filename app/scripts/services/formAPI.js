'use strict';

angular.module('angularFormEnd2endApp')
  .service('formAPI', function formAPI($scope, $resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var services = $resource('../server/index.php?Andy');
  });
