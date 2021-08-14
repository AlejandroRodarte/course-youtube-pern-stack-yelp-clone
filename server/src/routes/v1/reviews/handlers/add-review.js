const addReview = async (req, res) => {

    const { name, rating, review, restaurant_id } = req.body.data.review;

    try {
        
        const rows = 
            await req
                    .app
                    .get('queryBuilder')
                    .insert({ name, rating, review, restaurant_id })
                    .into('reviews')
                    .returning('*');

        const [newReview] = rows;

        res
            .status(201)
            .send({
                status: 'OK',
                data: {
                    message: 'A new review has been created.',
                    review: newReview
                }
            });

    } catch (e) {
        res
            .status(400)
            .send({
                status: 'Error',
                data: {
                    message: 'There was an error performing the insert.'
                }
            });
    }
    
};

module.exports = addReview;
