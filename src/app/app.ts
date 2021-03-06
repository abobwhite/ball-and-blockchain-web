import 'angular';
import 'angular-ui-router';
import 'angular-ui-bootstrap';
import 'ng-annotate';
import 'lodash';
require('bootstrap-loader');
import 'angular-toastr';
import 'angular-toastr/dist/angular-toastr.css';
require('font-awesome/css/font-awesome.css');

import HeaderComp from './header/header.comp.ts';
import HeaderCtrl from './header/header.ctrl.ts';
import SideBarComp from './side-bar/side-bar.comp.ts';
import SideBarCtrl from './side-bar/side-bar.ctrl.ts';
import HomeCtrl from './home/home.ctrl.ts';
import Events from './service/events.svc.ts';
import Policies from './service/policy.svc.ts';
import AuthSvc from './service/auth.svc.ts';
import PolicyCreateCtrl from './policies/create/policy-create.ctrl.ts';
import LoginCtrl from './login/login.ctrl.ts';
import FormFieldDir from './directives/form-field/form-field.dir.ts';
import NgTranscludeReplaceDir from './directives/ng-transclude-replace.dir.ts';
import Web3Svc from './service/web3.svc.ts';
import RatingCreateCtrl from './ratings/rating-create/rating-create.ctrl.ts';
import BidCreateCtrl from './bids/bid-create/bid-create.ctrl.ts';
import EnumHelperSvc from './service/enum-helper.svc.ts';
import MyPoliciesCtrl from './policies/my-policies/my-policies.ctrl.ts';
import BidAcceptCtrl from './bids/bid-accept/bid-accept.ctrl.ts';
import HttpRequestNotificationChannel from './service/http-request-notification-channel.ts';
import HttpInterceptor from './provider/http-interceptor.ts';
import LoadingDirective from './directives/loading.dir.ts';

let module: ng.IModule = angular.module('ballAndBlockchain', ['ui.router', 'toastr', 'ui.bootstrap'])
    .service('requestNotificationChannel', HttpRequestNotificationChannel)
    .directive('loading', LoadingDirective)
    .directive('formField', FormFieldDir)
    .directive('ngTranscludeReplace', NgTranscludeReplaceDir)
    .service('Auth', AuthSvc)
    .service('Events', Events)
    .service('Policies', Policies)
    .service('Web3', Web3Svc)
    .service('EnumHelper', EnumHelperSvc)
    .controller('HeaderCtrl', HeaderCtrl)
    .component('header', HeaderComp)
    .controller('SideBarCtrl', SideBarCtrl)
    .component('sideBar', SideBarComp)
    .controller('HomeCtrl', HomeCtrl)
    .controller('PolicyCreateCtrl', PolicyCreateCtrl)
    .controller('LoginCtrl', LoginCtrl)
    .controller('RatingCreateCtrl', RatingCreateCtrl)
    .controller('BidCreateCtrl', BidCreateCtrl)
    .controller('MyPoliciesCtrl', MyPoliciesCtrl)
    .controller('BidAcceptCtrl', BidAcceptCtrl);

import './routes.ts';
import IToastrService = angular.toastr.IToastrService;

module.config(($locationProvider: ng.ILocationProvider, $httpProvider: ng.IHttpProvider) => {
  $locationProvider.html5Mode(true);
  $httpProvider.interceptors.push(HttpInterceptor.factory);
});

module.run(/** @ngInject */($rootScope: ng.IRootScopeService, $state: ng.ui.IStateService, $stateParams: ng.ui.IStateParamsService,
            Auth: AuthSvc, toastr: IToastrService, Web3: Web3Svc) => {
  $rootScope.$on('$stateChangeStart', (event, toState) => {
    if (!Auth.getLoggedInUser() && toState.name !== 'Login') {
      event.preventDefault();
      toastr.warning('You must login to access the exchange');
      $state.go('Login');
    }
  });

  if (!!Auth.getLoggedInUser()) {
    Web3.setAccount(Auth.getLoggedInUser());
  }
});

export default module;