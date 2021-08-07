const { Router } = require('express');

const restaurantRoutes = require('./restaurants');

const router = Router();

router.use('/restaurants', restaurantRoutes);

module.exports = router;
