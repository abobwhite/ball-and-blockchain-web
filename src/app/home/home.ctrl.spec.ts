import './../app.ts';

import HomeController from './home.ctrl.ts';

describe('HomeCtrl', () => {
  let HomeCtrl: HomeController;

  beforeEach(() => {
    angular.mock.module('starterApp');
    angular.mock.inject(($controller) => {
      HomeCtrl = $controller('HomeCtrl', {

      });
    });
  });

  it('initializes properties on creation', () => {
    expect(HomeCtrl.someNum).toBe(1);
  });
});