"use strict";

app.controller("TodoCtrl", ($scope, ItemFactory) => {
    $scope.welcome = "Hello World";
    $scope.showListView = true;
    $scope.newTask = {};
    $scope.items = [];

    let getItems = () => {
      ItemFactory.getItemList().then(fbItems => {
        console.log("items", fbItems);
        $scope.items = fbItems;
      });
    };

    getItems();

    $scope.allItems = () => {
        $scope.showListView = true;
    };

    $scope.newItem = () => {
        $scope.showListView = false;
    };

    $scope.addNewItem = () => {
        $scope.newTask.isCompleted = false;
        ItemFactory.postNewItem($scope.newTask).then(itemId => {
          getItems();
            $scope.newTask = {};
            $scope.showListView = true;
        });
    };

    $scope.deleteItem = (itemId) => {
      ItemFactory.deleteItem(itemId).then(response => {
        getItems();
      });
    };
});
