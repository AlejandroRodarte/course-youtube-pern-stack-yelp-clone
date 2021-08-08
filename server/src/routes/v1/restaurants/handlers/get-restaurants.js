const getRestaurants = async (req, res) => {

    try {

        const query = 
            await req
                    .app
                    .get('db')
                    .query('SELECT * FROM restaurants');
    
        const { rows } = query;
    
        res
            .status(200)
            .send({
                status: 'OK',
                data: {
                    size: rows.length,
                    restaurants: rows
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

module.exports = getRestaurants;
