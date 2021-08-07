const getRestaurants = (req, res) => {
    res.status(200).send({
        status: 'OK',
        data: {
            restaurants: [
                {
                    id: 1,
                    name: 'McDonalds',
                    location: 'Seattle',
                    priceRange: 3
                },
                {
                    id: 2,
                    name: 'Wendys',
                    location: 'North Dakota',
                    priceRange: 2
                }
            ]
        }
    });
};

module.exports = getRestaurants;
