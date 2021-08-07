const deleteRestaurant = (req, res) => {
    res.status(200).send({
        status: 'OK',
        data: {
            id: req.params.id
        }
    });
};

module.exports = deleteRestaurant;
