/**
 * Created by ankit on 17/8/15.
 */

'use strict';

var crud_ops_module = angular.module('crud_ops_module', [ 'restangular', 'ngCookies' ]);

crud_ops_module.service('crudService', ['Restangular', CrudService]);
crud_ops_module.service('crudModel', ['crudService', '$cookies', CrudModel]);
crud_ops_module.controller('CrudController', [ 'crudModel', CrudController]);



