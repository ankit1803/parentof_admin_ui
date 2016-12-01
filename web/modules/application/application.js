'use strict';

var application_module = angular.module('application_module', [ 'restangular', 'ngCookies' ]);

//application_module.config(ConfigHelper);

application_module.controller('ApplicationController', [ '$scope', '$uibModal', 'crudService', ApplicationController]);

application_module.controller('ModalInstanceController', [ '$scope', '$uibModalInstance','data', ModalInstanceController]);