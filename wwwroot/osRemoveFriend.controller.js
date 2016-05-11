(function () {
    angular.module("application")
        .controller("osRemoveFriendController", function () {
            var vm = this;
            vm.removing = false;
            vm.collapse = () => {
                vm.collapsed = !vm.collapsed;
            };
            vm.startRemove = () => {
                vm.removing = true;
            };
            vm.cancelRemove = () => {
                vm.removing = false;
            }
            vm.confirmRemoval = function () {
                vm.notifyParent();
            };
        });
})();