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

    location: {
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

    priceRange: {
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
    }

}

module.exports = validators
