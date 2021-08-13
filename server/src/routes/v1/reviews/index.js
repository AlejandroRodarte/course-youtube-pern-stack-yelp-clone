const { Router } = require('express');

const handlers = require('./handlers');
const { validateObject } = require('../../../middleware/generators');
const specs = require('../../../util/validators/specs');

const router = Router();

router.get('/restaurant/:id', handlers.getReviewsByRestaurantId);
router.post('/', validateObject(specs.review, 'data.review'), handlers.addReview);

module.exports = router;
