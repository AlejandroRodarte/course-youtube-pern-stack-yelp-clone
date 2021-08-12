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
                .get('queryBuilder')
                .delete()
                .from('restaurants')
                .where('id', id);

        res
            .status(200)
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
