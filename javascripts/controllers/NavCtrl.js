"use strict";

app.controller("NavCtrl", ($scope) => {
    $scope.navItems = [
        {
            name: "Logout"
        }, {
            name: "All Items"
        }, {
            name: "New Item"
        }
    ];
});
