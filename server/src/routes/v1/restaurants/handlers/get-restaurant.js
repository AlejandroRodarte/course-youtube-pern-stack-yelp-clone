const getRestaurant = (req, res) => {
    res.status(200).send({
        status: 'OK',
        data: {
            restaurant: {
                id: +req.params.id,
                name: 'McDonalds',
                location: 'Seattle',
                priceRange: 3
            }
        }
    });
};

module.exports = getRestaurant;
