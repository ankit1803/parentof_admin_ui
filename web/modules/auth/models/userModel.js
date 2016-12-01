/**
 * Created by ankit on 11/8/15.
 */

function UserModel (userService, $cookies){
    this.username ='';
    this.password = ''

    this.userService = userService;


    this.setUser = function(username){
        this.username = username;
        $cookies.putObject('user', this);
    }

    this.getUser = function(){
        var user = $cookies.getObject('user');
        return user;
    }
}