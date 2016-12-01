function AuthenticationService(Restangular, $http) {
    var service = {};

    service.Login = Login;
    service.SetCredentials = SetCredentials;
    service.SetCredentials();
    return service;

    function Login(username, password) {
        var agent_obj = Restangular.all('agent').login({'agentId':username, 'campaignId':'random', 'sessionId': password});
        return agent_obj;

    };

    function SetCredentials(username, password) {
        $http.defaults.headers.common['Authorization'] = 'Basic ZmxpcGthcnREaWFsZXI6ZmxpcGthcnREaWFsZXJAdWIwbmE='; // jshint ignore:line
    };
};