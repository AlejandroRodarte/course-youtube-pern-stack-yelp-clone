const { Router } = require('express');

const handlers = require('./handlers');

const router = Router();

router.get('/restaurant/:id', handlers.getReviewsByRestaurantId);

module.exports = router;
