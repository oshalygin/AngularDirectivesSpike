(function () {

    angular.module("application")
        .directive("osUserDetail", function () {
            return {
               templateUrl: "./templates/os-user-detail.html"
            };
        });
})();