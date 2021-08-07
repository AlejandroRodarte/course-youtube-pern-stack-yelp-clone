const editRestaurant = (req, res) => {
    res.status(200).send({
        status: 'OK',
        data: {
            id: req.params.id,
            newRestaurant: req.body
        }
    });
};

module.exports = editRestaurant;
