/**
 * Created by ankit on 12/8/15.
 */

function ApplicationController ($scope, $modal, crudService ){
    var vm = this;
    vm.applications = [];
    vm.data = {};

    vm.open = function () {

        var modalInstance = $modal.open({
            templateUrl: 'modules/application/views/addApplication.html',
            controller: 'ModalInstanceController as mdliCtrl',
            resolve: {
                data : function () {
                    return vm.data;
                }
            }
        });

        modalInstance.result.then(function (data) {
            vm.addApplication(data);
        }, function () {

        });
    };

    vm.edit = function (data) {
        vm.data = data;

        var modalInstance = $modal.open({
            templateUrl: 'modules/application/views/addApplication.html',
            controller: 'ModalInstanceController as mdliCtrl',
            resolve: {
                data : function () {
                    return vm.data;
                }
            }
        });

        modalInstance.result.then(function (data) {
            vm.updateApplication(data);
        }, function () {

        });

    };

    vm.delete = function (data) {
        console.log(data);
        vm.deleteApp(data);
    };

    vm.getApplications = function(app){

        crudService.getAll("application").then(
            function(applications){
                vm.applications = applications;
            },
            function(){

            }
        );
    };

    vm.addApplication = function (app) {

        crudService.addEntity( 'application', app).then(
            function(response){
                if(response.responseCode == 200){
                    alert("application added successfully");
                    vm.getApplications();
                }else{
                    alert("error " + response);
                }

            },
            function(){
                alert("new customer add process failed, server issue");
            });
    };

    vm.updateApplication = function(app){

        crudService.postEntity( 'application', app,  [app.id]).then(
            function(response){
                alert("App updated");
                vm.getApplications();
            },
            function(){
                alert("call failed: Please check the network " +
                    "connectivty and try again");
            }
        );
    };

    vm.deleteApp = function(app){
        crudService.deleteEntity('application', [app.id]).then(
            function (response) {
                alert("deleted")
                vm.getApplications();
                
            },
            function () {
                alert("error")
                
            }
        )

    };


    vm.init = function () {
        vm.getApplications();
    }

    vm.init();

    $scope.$watch('vm.applications', function(current, original) {

    }, true);
    $scope.$watch('vm.app', function(current, original) {

    }, true);
    //
    //$scope.$watch('vm.assigned_agent', function(current, original) {
    //
    //}, true);

}
