const { Router } = require('express');

const handlers = require('./handlers');

const router = Router();

router.get('/', handlers.getRestaurants);
router.get('/:id', handlers.getRestaurant);
router.post('/', handlers.addRestaurant);
router.put('/:id', handlers.editRestaurant);
router.delete('/:id', handlers.deleteRestaurant);

module.exports = router;
