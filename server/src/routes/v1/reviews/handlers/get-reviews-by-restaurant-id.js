const getReviewsByRestaurantId = async (req, res) => {

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

        const { rows: reviews } =
            await req
                    .app
                    .get('db')
                    .query(
                        'SELECT * FROM reviews WHERE restaurant_id = $1',
                        [+id]
                    );

        res.status(200).send({
            status: 'OK',
            data: {
                reviews
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

module.exports = getReviewsByRestaurantId;
