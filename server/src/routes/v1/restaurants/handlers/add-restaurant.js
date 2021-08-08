const addRestaurant = async (req, res) => {

    const { name, location, priceRange } = req.body.data.restaurant;

    try {
        
        const query = 
            await req
                    .app
                    .get('db')
                    .query(
                        'INSERT INTO restaurants (name, location, price_range) values ($1, $2, $3) RETURNING *',
                        [name, location, priceRange]
                    );

        const [newRestaurant] = query.rows;

        res
            .status(201)
            .send({
                status: 'OK',
                data: {
                    message: 'A new restaurant has been created.',
                    restaurant: newRestaurant
                }
            });

    } catch (e) {
        res
            .status(400)
            .send({
                status: 'Error',
                data: {
                    message: 'There was an error performing the insert.'
                }
            });
    }

};

module.exports = addRestaurant;
