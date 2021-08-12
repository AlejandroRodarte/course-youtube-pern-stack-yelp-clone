const { partialQueries } = require('../../../../db/restaurants');

const getRestaurant = async (req, res) => {

    const id = req.params.id;
    const fieldsToPopulate = req.query.populateFields ? req.query.populateFields.split(',') : [];

    const knex = req.app.get('queryBuilder');

    if (isNaN(id)) {
        return res
                .status(400)
                .send({
                    status: 'Error',
                    data: {
                        message: 'Please provide a valid id.'
                    }
                });
    }

    try {

        const rows =
            await partialQueries
                    .getRestaurantsWithAverageRatingAndReviewCount(knex)
                    .where('restaurants.id', id);

        const [restaurant] = rows;

        if (!restaurant) {
            return res
                    .status(404)
                    .send({
                        status: 'Error',
                        data: {
                            message: 'No restaurant was found.'
                        }
                    });
        }

        for (const field of fieldsToPopulate) {
            switch (field) {
                case 'reviews': {

                    const rows =
                        await req
                                .app
                                .get('queryBuilder')
                                .select('*')
                                .from('reviews')
                                .where('restaurant_id', restaurant.id);

                    restaurant.reviews = rows;
                    
                    break;
                }
                default:
                    break;
            }
        }

        res.status(200).send({
            status: 'OK',
            data: {
                restaurant
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

module.exports = getRestaurant;
