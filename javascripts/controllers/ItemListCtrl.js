"use strict";

app.controller("ItemListCtrl", function($scope, $rootScope, ItemFactory) {
  $scope.items = [];

  let getItems = () => {
    ItemFactory.getItemList($rootScope.user.uid).then(fbItems => {
      $scope.items = fbItems;
    });
  };

  getItems();

  $scope.deleteItem = (itemId) => {
    ItemFactory.deleteItem(itemId).then(response => {
      getItems();
    });
  };

  $scope.inputChange = (item) => {
    ItemFactory.editItem(item).then(response =>{
      console.log("ctrl inputChange response", response);
    });
  };
});
