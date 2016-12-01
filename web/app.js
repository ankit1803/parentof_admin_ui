'use strict';

// Declare app level module which depends on views, and components
var crm_app = angular.module('parentof_admin', [
  'ui.router',
  'restangular',
  'auth',
  'admin_module',
  'application_module',
  'crud_ops',
  'ui.bootstrap'
]);

crm_app.config(['$httpProvider', AppConfig]);
crm_app.config(RestangularConfig);

crm_app.config(RouteHelper);