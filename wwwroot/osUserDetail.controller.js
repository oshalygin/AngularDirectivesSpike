(function () {
    angular.module("application")
        .controller("osUserDetailController", function ($scope) {
            var vm = this;
            vm.collapsed = !!vm.initiallyCollapsed;
            vm.removing = false;
            vm.knightMe = () => {
                vm.user.rank = "KNIGHT";
            };
            vm.collapse = () => {
                vm.collapsed = !vm.collapsed;
            }
            vm.removeFriend = (friend) => {
                let friendIndex = vm.user.friends.indexOf(friend);
                console.log(friendIndex);
                if (friendIndex > -1) {
                    vm.user.friends.splice(friendIndex, 1);
                }
            };
        });
})();