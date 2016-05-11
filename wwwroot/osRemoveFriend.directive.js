(function () {
    angular.module("application")
        .directive("osRemoveFriend", function () {
            return {
                restrict: "E",
                templateUrl: "./templates/os-remove-friend.html",
                controller: "osRemoveFriendController",
                controllerAs: "vm",
                bindToController: true,
                scope: {
                    passedInFriend: "=friend",
                    notifyParent: "&method"
                }

            }
        })
})();