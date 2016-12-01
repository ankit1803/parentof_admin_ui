function LoginController ( user, $location ){

    this._userService = user.userService;

    this.submit = function (){
        var that = this;
        var login = this._userService.login(this.user.username,  this.user.password);
        login.then(function(_user){
            $location.path('/dashboard');

            user.setUser(_user.agent);
            console.log("login done");
        }, function(){
            console.log('error login');
        });
    };

};
