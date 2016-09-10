import PolicySvc from './service/policy.svc.ts';

/** @ngInject */
angular.module('ballAndBlockchain').config(($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.route.IRouteProvider): void => {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('Home', {
      url: '/',
      controller: 'HomeCtrl as ctrl',
      template: require('./home/home.html'),
      resolve: {
        policies: /** @ngInject */(Policies: PolicySvc) => {
          return Policies.getPolicies();
        }
      }
    })
    .state('Login', {
      url: '/login',
      controller: 'LoginCtrl as ctrl',
      template: require('./login/login.html')
    })
    .state('PolicyCreate', {
      url: '/policies/create',
      controller: 'PolicyCreateCtrl as ctrl',
      template: require('./policies/create/policy-create.html')
    });
});