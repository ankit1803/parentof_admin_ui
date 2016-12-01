/**
 * Created by ankit on 11/8/15.
 */

function UserModel (userService, $cookies){
    this.username ='';
    this.password = ''
    this.role = ''

    this.userService = userService;


    this.setUser = function(user){
        this.username = user.username;
        this.role = user.role;
        $cookies.putObject('user', this);
    }

    this.getUser = function(){
        var user = $cookies.getObject('user');
        return user;
    }
}