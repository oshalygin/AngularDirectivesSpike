(function () {

    angular.module("application")
        .controller("MainController", MainController);

    function MainController($scope) {
        var vm = this;
        vm.userOleg = {
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

        vm.userCarlota = {
            name: "Carlota Turcios",
            address: {
                street: "12345 Burbank Blvd",
                city: "North Hollywood",
                state: "CA"
            },
            friends: [
                "Sasha", "Lux", "Pancho", "Lucky"
            ]
        };
    }

})();