const knex = require('../../knex');

const averageRatingCase =
    knex.raw(`
        CASE WHEN AVG(rating) IS NULL
            THEN '0.00'
            ELSE TO_CHAR(AVG(rating), 'FM999999999.00')
            END AS average_rating
    `);

module.exports = averageRatingCase;
