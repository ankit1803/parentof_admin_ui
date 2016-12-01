'use strict';

var admin_module = angular.module('admin_module', [ 'restangular', 'ngCookies' ]);

//admin_module.config(ConfigHelper);

admin_module.controller('BaseController', [ '$scope', 'userModel',  BaseController]);

admin_module.controller('AdminController', [ '$scope', 'crudService', AdminController]);


