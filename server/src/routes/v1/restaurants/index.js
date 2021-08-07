const { Router } = require('express');

const handlers = require('./handlers');

const router = Router();

router.get('/', handlers.getRestaurants);
router.get('/:id', handlers.getRestaurant);
router.post('/', handlers.addRestaurant);

module.exports = router;
