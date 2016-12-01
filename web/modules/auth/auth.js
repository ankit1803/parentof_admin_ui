'use strict';

var auth_module = angular.module('auth', [ 'restangular', 'ngCookies' ]);

//auth_module.config(ConfigHelper);

auth_module.service('AuthenticationService', ['crudService', '$http', AuthenticationService]);

auth_module.service('userService', ['AuthenticationService', UserService]);

auth_module.service('userModel', ['userService', '$cookies', UserModel]);

auth_module.controller('loginController', [ 'userModel', '$location', '$scope', LoginController]);


