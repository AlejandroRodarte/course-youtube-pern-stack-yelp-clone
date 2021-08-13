const validators = {

    name: {
        validate: true,
        strategies: [
            {
                type: 'exists'
            },
            {
                type: 'data-type',
                spec: {
                    type: 'string'
                }
            },
            {
                type: 'min-length-inclusive',
                spec: {
                    limit: 1
                }
            },
            {
                type: 'max-length-inclusive',
                spec: {
                    limit: 50
                }
            }
        ]
    },

    rating: {
        validate: true,
        strategies: [
            {
                type: 'exists'
            },
            {
                type: 'data-type',
                spec: {
                    type: 'number'
                }
            },
            {
                type: 'min-inclusive',
                spec: {
                    limit: 1
                }
            },
            {
                type: 'max-inclusive',
                spec: {
                    limit: 5
                }
            }
        ]
    },

    review: {
        validate: true,
        strategies: [
            {
                type: 'exists'
            },
            {
                type: 'data-type',
                spec: {
                    type: 'string'
                }
            },
            {
                type: 'min-length-inclusive',
                spec: {
                    limit: 1
                }
            }
        ]
    },

    restaurant_id: {
        validate: true,
        strategies: [
            {
                type: 'exists'
            },
            {
                type: 'data-type',
                spec: {
                    type: 'string-number'
                }
            },
            {
                type: 'min-length-inclusive',
                spec: {
                    limit: 1
                }
            },
            {
                type: 'async',
                spec: {
                    validateAsync: async ({ knex, body }) => {
                        const { data: { review: { restaurant_id } } } = body;

                        try {

                            const [{ entries }] =
                                await knex
                                        .count({
                                            entries: 'id'
                                        })
                                        .from('restaurants')
                                        .where('id', restaurant_id);
    
                            if (+entries === 0) return false;
                            return true;

                        } catch (e) {
                            return false;
                        }
                    },
                    message: 'The associated restaurant was not found in the database.'
                }
            }
        ]
    }

};

module.exports = validators;
