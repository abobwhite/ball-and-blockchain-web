import 'angular';
import 'angular-ui-router';
import 'ng-annotate';
import 'lodash';
require('bootstrap-loader');
import 'angular-toastr';
import 'angular-toastr/dist/angular-toastr.css';
require('font-awesome/css/font-awesome.css');

import HomeCtrl from './home/home.ctrl.ts';

let module: ng.IModule = angular.module('starterApp', ['ui.router', 'toastr'])
    .controller('HomeCtrl', HomeCtrl);

import './routes.ts';

export default module;