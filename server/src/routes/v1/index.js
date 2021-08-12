const { Router } = require('express');

const restaurantRoutes = require('./restaurants');
const reviewRoutes = require('./reviews');

const router = Router();

router.use('/restaurants', restaurantRoutes);
router.use('/reviews', reviewRoutes);

module.exports = router;
