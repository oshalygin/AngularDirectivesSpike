(function () {
    angular
        .module("application")
        .controller("osAddressDetailController", function () {
            var vm = this;
            vm.collapsed = true;

            vm.collapse = () => {
                vm.collapsed = true;
            };
            vm.expand = () => {
                vm.collapsed = false;
            };
        });
})();