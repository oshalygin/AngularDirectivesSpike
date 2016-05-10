(function () {

    angular.module("application")
        .controller("MainController", MainController);

    function MainController() {
        var vm = this;
        vm.user = {
            name: "Oleg Shalygin",
            address: {
                street: "12345 Burbank Blvd",
                city: "North Hollywood",
                state: "CA"
            },
            friends: [
                "Leia",
                "Chewbacca",
                "Han Solo"
            ]
        };
    }

})();