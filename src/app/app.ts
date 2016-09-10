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

let module: ng.IModule = angular.module('ballAndBlockchain', ['ui.router', 'toastr', 'ui.bootstrap'])
    .directive('formField', FormFieldDir)
    .directive('ngTranscludeReplace', NgTranscludeReplaceDir)
    .service('Auth', AuthSvc)
    .service('Events', Events)
    .service('Policies', Policies)
    .service('Web3', Web3Svc)
    .controller('HeaderCtrl', HeaderCtrl)
    .component('header', HeaderComp)
    .controller('SideBarCtrl', SideBarCtrl)
    .component('sideBar', SideBarComp)
    .controller('HomeCtrl', HomeCtrl)
    .controller('PolicyCreateCtrl', PolicyCreateCtrl)
    .controller('LoginCtrl', LoginCtrl);

import './routes.ts';

module.config(($locationProvider: ng.ILocationProvider) => {
  $locationProvider.html5Mode(true);
  // $httpProvider.interceptors.push(() => {
  //   return {
  //     request: (httpConfig) => {
  //       if (httpConfig.url.indexOf('.html') !== -1) {
  //         httpConfig.url = `/api${httpConfig.url}`;
  //       }
  //
  //       return httpConfig;
  //     }
  //   };
  // });
});

export default module;