const getRestaurants = require('./get-restaurants');
const getRestaurant = require('./get-restaurant');
const addRestaurant = require('./add-restaurant');
const editRestaurant = require('./edit-restaurant');
const deleteRestaurant = require('./delete-restaurant');

const handlers = {
    getRestaurants,
    getRestaurant,
    addRestaurant,
    editRestaurant,
    deleteRestaurant
};

module.exports = handlers;
