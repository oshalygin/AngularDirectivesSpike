(function () {
    angular.module("application")
        .directive("osUserDetail", function () {
            return {
                templateUrl: "./templates/os-user-detail.html",
                controller: "osUserDetailController",
                controllerAs: "vm",
                bindToController: true,
                scope: {
                    user: "="
                }
            };
        });
})();