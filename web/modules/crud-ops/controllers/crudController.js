/**
 * Created by ankit on 17/8/15.
 */


function CrudController (crudModel ){
    this.crudService = crudModel.crudService;

    this.getRootObject = function(entity){
        var rootObj = this.crudService.getRootObject(entity);
        return rootObj;
    }

    this.getAll = function(entity){
        var all = this.crudService.getAll(entity);
        return all;
    }

    this.addEntity = function(entity){
        var add_entity = this.crudService.addEntity(entity);
        add_entity.then(function(){}, function(){});
    }


    this.updateEntity = function(entity){
        var update_entity = this.crudService.updateEntity(entity);
        update_entity.then(function(){}, function(){});
    };

    this.deleteEntity = function(entity){
        var delete_entity = this.crudService.deleteEntity(entity);
        delete_entity.then(function(){}, function(){});
    }

};
