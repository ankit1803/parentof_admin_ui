/**
 * Created by ankit on 17/8/15.
 */


function CrudService (Restangular){

    this.getAll = function(entity){
        var get_all = Restangular.all(entity).getList();
        return get_all;
    };

    this.get_one = function(entity, id){
        var get_one = Restangular.one(entity, id).get();
        return get_one;
    };

    this.chain_all = function(entity_obj_arr, lister){
        var chain_all_entity = Restangular;
        for (var index in entity_obj_arr) {
            var entity_obj = entity_obj_arr[index];
            for(var key in entity_obj ){
                chain_all_entity = chain_all_entity.one( key, entity_obj[key]);
            }

        }
        return chain_all_entity.getList(lister);
    };

    this.chain_one = function(entity_obj_arr){
        var chain_all_entity = Restangular;
        for (var index in entity_obj_arr) {
            var entity_obj = entity_obj_arr[index];
            for(var key in entity_obj ){
                chain_all_entity = chain_all_entity.one( key, entity_obj[key]);
            }

        }
        return chain_all_entity.get();
    };

    this.addEntity = function(entity, params, sub_entity_arr){

        var add_entity = Restangular.all(entity);

        if(sub_entity_arr != undefined){
            for (var index in sub_entity_arr) {
                var sub_entity = sub_entity_arr[index];
                add_entity = add_entity.one( sub_entity );
            }
        }
        if(Object.keys(params).length != 0){
            add_entity = add_entity.post(params);
        }else{
            add_entity = add_entity.post();
        }
        return add_entity;
    };

    this.postEntity = function(entity, params, sub_entity_arr){

        var post_entity = Restangular.all(entity);

        if(sub_entity_arr != undefined){
            for (var index in sub_entity_arr) {
                var sub_entity = sub_entity_arr[index];
                post_entity = post_entity.all( sub_entity );
            }
        }
        if(Object.keys(params).length != 0){
            post_entity = post_entity.post(params);
        }else{
            post_entity = post_entity.post();
        }
        return post_entity;
    };


    this.deleteEntity = function(entity, sub_entity_arr){

        var delete_entity = Restangular.all(entity);

        for (var index in sub_entity_arr) {
            var sub_entity = sub_entity_arr[index];
            delete_entity = delete_entity.one( sub_entity );
        }


        return delete_entity.remove();
    };

    this.batch_deleteEntity = function(entity, sub_entity_arr){

        var delete_entity = Restangular.all(entity);

        for (var index in sub_entity_arr) {
            var sub_entity = sub_entity_arr[index];
            delete_entity = delete_entity.one( sub_entity );
        }


        return delete_entity.remove();
    }

}