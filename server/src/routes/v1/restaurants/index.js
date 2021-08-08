const { Router } = require('express');

const handlers = require('./handlers');
const { validateObject } = require('../../../middleware/generators');
const specs = require('../../../util/validators/specs');

const router = Router();

router.get('/', handlers.getRestaurants);
router.get('/:id', handlers.getRestaurant);
router.post('/', validateObject(specs.restaurant, 'data.restaurant'), handlers.addRestaurant);
router.put('/:id', handlers.editRestaurant);
router.delete('/:id', handlers.deleteRestaurant);

module.exports = router;
