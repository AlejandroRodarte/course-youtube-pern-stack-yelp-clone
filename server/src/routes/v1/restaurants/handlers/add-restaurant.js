const addRestaurant = async (req, res) => {

    const { name, location, priceRange: price_range } = req.body.data.restaurant;

    try {
        
        const rows = 
            await req
                    .app
                    .get('queryBuilder')
                    .insert({ name, location, price_range })
                    .into('restaurants')
                    .returning('*');

        const [newRestaurant] = rows;

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
