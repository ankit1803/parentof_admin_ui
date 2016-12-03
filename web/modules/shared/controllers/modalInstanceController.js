function ModalInstanceController ( $scope, $uibModalInstance, data ){

    var vm = this;
    vm.data = data;

    vm.ok = function () {
        $uibModalInstance.close(vm.data);
    };

    vm.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.$watch('vm.data', function(current, original) {

    }, true);

};
