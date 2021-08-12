const getRestaurants = async (req, res) => {

    try {

        const rows = 
            await req
                    .app
                    .get('queryBuilder')
                    .select('*')
                    .from('restaurants');
    
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
