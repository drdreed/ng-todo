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
            }).error(errorResponse => {
                reject(errorResponse);
            });
        });
    };
    return {getItemList: getItemList};
});
