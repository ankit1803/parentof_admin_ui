/**
 * Created by ankit on 11/8/15.
 */

function UserService (AuthenticationService){
    this.login = function(username, password){
        var login = AuthenticationService.Login(username, password);
        return login;
    }


}