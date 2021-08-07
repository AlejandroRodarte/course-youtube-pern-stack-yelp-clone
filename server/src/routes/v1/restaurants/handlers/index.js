const getRestaurants = require('./get-restaurants');
const getRestaurant = require('./get-restaurant');
const addRestaurant = require('./add-restaurant');

const handlers = {
    getRestaurants,
    getRestaurant,
    addRestaurant
};

module.exports = handlers;
