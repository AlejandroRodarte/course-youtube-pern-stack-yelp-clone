const { partialQueries } = require('../../../../db/restaurants');

const getRestaurants = async (req, res) => {

    const knex = req.app.get('queryBuilder');

    try {

        const rows = 
            await partialQueries
                    .getRestaurantsWithAverageRatingAndReviewCount(knex)
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
