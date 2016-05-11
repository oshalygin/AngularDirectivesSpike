(function () {
    angular.module("application")
        .directive("osUserDetail", function () {
            return {
                restrict: "E",
                templateUrl: "./templates/os-user-detail.html",
                controller: "osUserDetailController",
                controllerAs: "vm",
                bindToController: true,
                scope: {
                    user: "=",
                    initiallyCollapsed: "@collapsed"
                }
            };
        });
})();