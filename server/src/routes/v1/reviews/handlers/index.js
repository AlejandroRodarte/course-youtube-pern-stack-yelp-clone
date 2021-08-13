const getReviewsByRestaurantId = require('./get-reviews-by-restaurant-id');
const addReview = require('./add-review');

const handlers = {
    getReviewsByRestaurantId,
    addReview
};

module.exports = handlers;
