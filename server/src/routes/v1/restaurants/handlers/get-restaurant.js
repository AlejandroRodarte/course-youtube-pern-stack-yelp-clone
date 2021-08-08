const getRestaurant = async (req, res) => {

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

    try {

        const query = 
            await req
                    .app
                    .get('db')
                    .query(
                        'SELECT * FROM restaurants WHERE id = $1',
                        [+id]
                    );

        const [restaurant] = query.rows;

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
