"use strict";

app.controller("ItemNewCtrl", function($scope, $location, ItemFactory) {
    $scope.newTask = {};

    $scope.addNewItem = () => {
        $scope.newTask.isCompleted = false;
        ItemFactory.postNewItem($scope.newTask).then(itemId => {
            $location.url("/items/list");
            $scope.newTask = {};
        });
    };
});
