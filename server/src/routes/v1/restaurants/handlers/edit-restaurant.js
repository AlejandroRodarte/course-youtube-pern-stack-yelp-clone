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

    const { name, location, priceRange } = req.body.data.restaurant;

    try {
        
        const query = 
            await req
                    .app
                    .get('db')
                    .query(
                        'UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id = $4 RETURNING *',
                        [name, location, priceRange, id]
                    );

        const [updatedRestaurant] = query.rows;

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
