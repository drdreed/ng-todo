"use strict";

var app = angular.module("TodoApp", []);

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

app.controller("TodoCtrl", ($scope) => {
    $scope.welcome = "Hello World";
    $scope.showListView = true;
    $scope.newTask = {};
    $scope.items = [
        {
            id: 0,
            task: "mow the lawn",
            isCompleted: true,
            assignedTo: "Zoe"
        }, {
            id: 1,
            task: "do quiz",
            isCompleted: false,
            assignedTo: "Dustin"
        }, {
            id: 2,
            task: "mow the lawn",
            isCompleted: true,
            assignedTo: "Zoe"
        }
    ];

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
