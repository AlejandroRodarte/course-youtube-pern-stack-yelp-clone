const getRestaurants = async (req, res) => {

    const query = 
        await req
                .app
                .get('db')
                .query('SELECT * FROM restaurants');

    const { rows } = query;

    res
        .status(200).
        send({
            status: 'OK',
            data: {
                restaurants: rows
            }
        });

};

module.exports = getRestaurants;
