const { Router } = require('express');

const handlers = require('./handlers');

const router = Router();

router.get('/', handlers.getRestaurants);

module.exports = router;
