const getRestaurants = async (req, res) => {

    const knex = req.app.get('queryBuilder');

    const averageRatingCase =
        knex.raw(`
            CASE WHEN AVG(rating) IS NULL
                THEN '0.00'
                ELSE TO_CHAR(AVG(rating), 'FM999999999.00')
                END AS average_rating
        `);

    try {

        const rows = 
            await knex
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
                    .groupBy('restaurants.id')
                    .orderBy([
                        {
                            column: 'average_rating',
                            order: 'desc'
                        },
                        {
                            column: 'name',
                            order: 'asc'
                        }
                    ]);
    
        res
            .status(200)
            .send({
                status: 'OK',
                data: {
                    size: rows.length,
                    restaurants: rows
                }
            });
            
    } catch (e) {
        res
            .status(400)
            .send({
                status: 'Error',
                data: {
                    message: 'There was an error performing the query.'
                }
            });
    }


};

module.exports = getRestaurants;
