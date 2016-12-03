'use strict';

var user_module = angular.module('user_module', [ 'restangular', 'ngCookies' ]);

//user_module.config(ConfigHelper);

user_module.controller('UserController', [ '$scope', '$uibModal', 'crudService', UserController]);

user_module.controller('HModalInstanceController', [ '$scope', '$uibModalInstance','data', ModalInstanceController]);