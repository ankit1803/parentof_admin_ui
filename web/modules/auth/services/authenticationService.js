function AuthenticationService(crudService, $http) {
    var service = {};

    service.Login = Login;
    service.SetCredentials = SetCredentials;
    service.SetCredentials();
    return service;

    function Login(username, password) {
        var user = {'username':username, 'password': password};

        var user_obj = crudService.postEntity( 'login', user, []);
        return user_obj;

    };

    function SetCredentials(username, password) {
        $http.defaults.headers.common['Authorization'] = 'Basic ZmxpcGthcnREaWFsZXI6ZmxpcGthcnREaWFsZXJAdWIwbmE='; // jshint ignore:line
    };
};