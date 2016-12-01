function LoginController ( user, $location, $scope ){

    var vm = this;

    vm.user = user;
    vm._userService = vm.user.userService;
    vm.error_label = '';


    this.submit = function (){
        var login = vm._userService.login(vm.user.username,  vm.user.password);

        login.then(function(response){
            if(response.responseDesc == "success"){
                user.setUser(vm.user.username);

                $location.path('/admin');
                console.log("login done");
                vm.error_label = '';
            }else{
                vm.error_label = "wrong username or password, please try again";
                console.log("error login");
            }

        }, function(){
            alert("Not able to login, please try again after sometime !!")
            console.log('error login');
        });
    };

    $scope.$watch('vm.error_label', function(current, original) {

    }, true);

    $scope.$watch('vm.user', function(current, original) {

    }, true);

};
