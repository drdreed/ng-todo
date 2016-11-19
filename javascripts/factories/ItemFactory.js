"use strict";

app.factory("ItemFactory", ($q, $http, FIREBASE_CONFIG) => {

    const getItemList = () => {
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/items.json`).success(response => {
                let items = [];
                Object.keys(response).map(key => {
                    response[key].id = key;
                    items.push(response[key]);
                });
                resolve(items);
            }).error(errorResponse => reject(errorResponse));
        });
    };

    const postNewItem = (newItem) => {
        return $q((resolve, reject) => {
            $http.post(`${FIREBASE_CONFIG.databaseURL}/items.json`,
              JSON.stringify({
                assignedTo: newItem.assignedTo,
                isCompleted: newItem.isCompleted,
                task: newItem.task
              }))
            .success(postResponse => resolve(postResponse))
            .error(errorResponse => reject(errorResponse));
        });
    };

    const deleteItem = (itemId) => {
      return $q((resolve, reject) => {
        $http.delete(`${FIREBASE_CONFIG.databaseURL}/items/${itemId}.json`)
        .success(deletedResponse => resolve(deletedResponse))
        .error(errorResponse => reject(errorResponse));
      });
    };

    return {getItemList: getItemList, postNewItem: postNewItem, deleteItem:deleteItem};
});
