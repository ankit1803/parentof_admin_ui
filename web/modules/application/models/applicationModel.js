/**
 * Created by ankit on 11/8/15.
 */

function AppModel (userService, $cookies){
    this.name ='';
    this.id = ''

    this.setApp = function(app){
        this.name = app.name;
        this.id = app.id;
    }

    this.getApp = function(){
        return this;
    }
}