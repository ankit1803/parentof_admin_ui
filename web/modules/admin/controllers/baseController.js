/**
 * Created by ankit on 12/8/15.
 */

function BaseController ( $scope, userModel ){

    var vm = this;
    vm.renderHome = function(){
        var user = userModel.getUser();

        if( user!=undefined && user.username != undefined && user.username != null){
            return 'modules/admin/views/admin.html';
        }else{
            return 'modules/auth/views/login.html';
        }
    };
};
