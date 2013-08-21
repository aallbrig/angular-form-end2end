'use strict';

describe('Service: formAPI', function () {

  // load the service's module
  beforeEach(module('angularFormEnd2endApp'));

  // instantiate service
  var formAPI;
  beforeEach(inject(function (_formAPI_) {
    formAPI = _formAPI_;
  }));

  it('should do something', function () {
    expect(!!formAPI).toBe(true);
  });

});
