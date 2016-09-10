import PolicySvc from './service/policy.svc.ts';
import RiskType from './domain/risk-type.ts';
import Policy from './domain/policy.ts';
import * as moment from 'moment';

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
          //return Policies.getPolicies();
          return [
            new Policy({
              id: '12345678901234567892345678',
              assumingUserId: 'q827343333',
              cedingUserId: '923878327',
              riskType: RiskType.LUNG_CANCER,
              policyFaceAmount: 100000,
              ratingExpiration: moment().add(1, 'd').toDate(),
              offerExpiration: moment().add(2, 'd').toDate()
            }),
            new Policy({
              id: '34567890456789',
              assumingUserId: '9876543987654',
              cedingUserId: '234567890',
              riskType: RiskType.HEART_ATTACK,
              policyFaceAmount: 250000,
              ratingExpiration: moment().subtract(1, 'd').toDate(),
              offerExpiration: moment().add(2, 'd').toDate()
            })
          ];
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