const deleteRestaurant = async (req, res) => {

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
        
        await req
                .app
                .get('db')
                .query(
                    'DELETE FROM restaurants WHERE id = $1',
                    [id]
                );

        res
            .status(204)
            .send({
                status: 'OK',
                data: {
                    message: 'The restaurant has been deleted.',
                    id
                }
            });

    } catch (e) {
        res
            .status(400)
            .send({
                status: 'Error',
                data: {
                    message: 'There was an error performing the delete.'
                }
            });
    }

};

module.exports = deleteRestaurant;
