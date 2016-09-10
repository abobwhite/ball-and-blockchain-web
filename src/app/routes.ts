import PolicySvc from './service/policy.svc.ts';
import Web3Svc from "./service/web3.svc.ts";
import Policy from "./domain/policy.ts";

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
    })
    .state('MyPolicies', {
      url: '/policies/mine',
      controller: 'MyPoliciesCtrl as ctrl',
      template: require('./policies/my-policies/my-policies.html'),
      resolve: {
        policies: /** @ngInject */(Policies: PolicySvc, Web3: Web3Svc) => {
          return Policies.getPolicies().then((policies: any) => {
            return Array<Policy>(policies.filter((policy: Policy) => { return policy.cedingUserId === Web3.activeAccount; }));
          });
        }
      }
    });
});