describe('InjectionCtrl ', function () {
  beforeEach(module('articulate.injection-loading'));

  it('should have a dummy test', inject(function () {
    expect(true).toBeTruthy();
  }));
});

