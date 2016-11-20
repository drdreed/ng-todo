"use strict";

app.controller("ItemViewCtrl", function ($scope, $routeParams, ItemFactory) {
  $scope.selectedItem = {};
  let itemId = $routeParams.id;

  ItemFactory.getSingleItem(itemId).then(oneItem => {
    console.log("itemId", itemId);
    oneItem.id = itemId;
    $scope.selectedItem = oneItem;
  });
});
