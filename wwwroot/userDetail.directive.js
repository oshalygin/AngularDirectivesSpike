(function () {

    angular.module("app")
        .directive("userDetail", function () {
            return {
               templateUrl: "./templates/user-detail.html"
            };
        });
})();