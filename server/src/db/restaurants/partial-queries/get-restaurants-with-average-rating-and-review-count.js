const { averageRatingCase } = require("../case-clauses")

const getRestaurantsWithAverageRatingAndReviewCount =
    (queryBuilder) =>
        queryBuilder
            .select(
                'restaurants.id',
                'restaurants.name',
                'restaurants.location',
                'restaurants.price_range',
                averageRatingCase
            )
            .count({
                review_count: 'reviews.id'
            })
            .from('restaurants')
            .leftJoin(
                'reviews',
                'restaurants.id',
                'reviews.restaurant_id'
            )
            .groupBy('restaurants.id');

module.exports = getRestaurantsWithAverageRatingAndReviewCount;