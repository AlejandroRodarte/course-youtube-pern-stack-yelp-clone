const addRestaurant = (req, res) => {
    res.status(201).send({
        status: 'OK',
        data: {
            restaurant: req.body
        }
    });
};

module.exports = addRestaurant;
