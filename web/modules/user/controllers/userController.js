/**
 * Created by ankit on 12/8/15.
 */

function UserController($scope, $modal, crudService) {
    var vm = this;
    vm.users = [];
    vm.user = {};
    vm.data = {};

    vm.open = function () {

        var modalInstance = $modal.open({
            templateUrl: 'modules/user/views/addUser.html',
            controller: 'ModalInstanceController as mdliCtrl',
            resolve: {
                data: function () {
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
            templateUrl: 'modules/user/views/addUser.html',
            controller: 'ModalInstanceController as mdliCtrl',
            resolve: {
                data: function () {
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

    vm.getApplications = function (user) {

        crudService.getAll("user").then(
            function (users) {
                vm.users = users;
            },
            function () {

            }
        );
    };

    vm.addApplication = function (user) {

        crudService.addEntity('user', user).then(
            function (response) {
                if (response.responseCode == 200) {
                    alert("user added successfully");
                    vm.getApplications();
                } else {
                    alert("error " + response);
                }

            },
            function () {
                alert("new customer add process failed, server issue");
            });
    };

    vm.updateApplication = function (user) {

        crudService.postEntity('user', user, [user.username]).then(
            function (response) {
                alert("User updated");
                vm.getApplications();
            },
            function () {
                alert("call failed: Please check the network " +
                    "connectivty and try again");
            }
        );
    };

    vm.deleteApp = function (user) {
        crudService.deleteEntity('user', [user.username]).then(
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

    $scope.$watch('vm.users', function (current, original) {

    }, true);
    $scope.$watch('vm.user', function (current, original) {

    }, true);
    //
    //$scope.$watch('vm.assigned_agent', function(current, original) {
    //
    //}, true);

}
