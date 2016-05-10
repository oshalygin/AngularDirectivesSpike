(function () {
    angular.module("application")
        .controller("osUserDetailController", () => {
            var vm = this;

            vm.knightMe = () => {
                vm.user.rank = "KNIGHT";
            }
        });
})();