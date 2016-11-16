"use strict";

app.controller("TodoCtrl", ($scope, ItemFactory) => {
    $scope.welcome = "Hello World";
    $scope.showListView = true;
    $scope.newTask = {};
    $scope.items = [];

    ItemFactory.getItemList().then(fbItems => {
      console.log("items", fbItems);
      $scope.items = fbItems;
    });

    $scope.allItems = () => {
        $scope.showListView = true;
    };

    $scope.newItem = () => {
        $scope.showListView = false;
    };

    $scope.addNewItem = () => {
      $scope.newTask.isCompleted = false;
      $scope.newTask.id = $scope.items.length;
      console.log("newTask in function", $scope.newTask);
      $scope.items.push($scope.newTask);
      $scope.newTask = {};
      $scope.showListView = true;
    };
});
