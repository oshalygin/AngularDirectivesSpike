(function () {
    angular.module("application")
        .directive("osAddressDetail", function () {
            return {
                restrict: "E",
                templateUrl: "./templates/os-address-detail.html",
                controller: "osAddressDetailController",
                controllerAs: "vm",
                bindToController: true,
                scope: {
                    user: "=user"
                }
            }
        });
})();