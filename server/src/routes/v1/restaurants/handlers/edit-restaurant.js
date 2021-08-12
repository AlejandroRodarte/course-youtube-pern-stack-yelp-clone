const editRestaurant = async (req, res) => {

    const id = req.params.id;

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

    const { name, location, priceRange: price_range } = req.body.data.restaurant;

    try {
        
        const rows = 
            await req
                    .app
                    .get('queryBuilder')('restaurants')
                    .update({ name, location, price_range })
                    .where('id', id)
                    .returning('*');

        const [updatedRestaurant] = rows;

        res
            .status(201)
            .send({
                status: 'OK',
                data: {
                    message: 'The restaurant has been updated.',
                    restaurant: updatedRestaurant
                }
            });

    } catch (e) {
        res
            .status(400)
            .send({
                status: 'Error',
                data: {
                    message: 'There was an error performing the update.'
                }
            });
    }

};

module.exports = editRestaurant;
