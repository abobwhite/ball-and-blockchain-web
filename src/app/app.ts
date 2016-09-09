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
import PolicyCreateCtrl from './policies/create/policy-create.ctrl.ts';

let module: ng.IModule = angular.module('starterApp', ['ui.router', 'toastr', 'ui.bootstrap'])
    .service('Events', Events)
    .service('Policies', Policies)
    .controller('HeaderCtrl', HeaderCtrl)
    .component('header', HeaderComp)
    .controller('SideBarCtrl', SideBarCtrl)
    .component('sideBar', SideBarComp)
    .controller('HomeCtrl', HomeCtrl)
    .controller('PolicyCreateCtrl', PolicyCreateCtrl);

import './routes.ts';

// module.config(($httpProvider) => {
//   $httpProvider.interceptors.push(() => {
//     return {
//       request: (httpConfig) => {
//         if (httpConfig.url.indexOf('.html') !== -1) {
//           httpConfig.url = `/api${httpConfig.url}`;
//         }
//
//         return httpConfig;
//       }
//     };
//   });
// });

export default module;