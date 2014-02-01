describe('Main App Controller', function () {
  var $scope = null;
  var ctrl = null;


  beforeEach(module('articulate'));
  beforeEach(inject(function ($rootScope, $controller) {
    $scope = $rootScope.$new();
    ctrl = $controller('AppCtrl', {
      $scope: $scope
    });
  }));
  it('should be a mockingjay', function () {

    //just assert. $scope was set up in beforeEach() (above)
    expect(true).toBe(true);
  });

});
