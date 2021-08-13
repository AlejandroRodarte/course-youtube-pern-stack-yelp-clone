const common = require('../../util/common');

const validateObject = (spec, path) => async (req, res, next) => {

    const ctx = {
        knex: req.app.get('queryBuilder'),
        body: req.body
    };

    const data = common.dotPathToObjectRef(req.body, path);

    if (!data) {
        return res
                .status(404)
                .send({
                    status: 'Error',
                    data: {
                        message: 'Data not found at the path specified.'
                    }
                });
    }

    const errors = await common.validateObject(spec, data, ctx);

    if (errors) {
        return res
                .status(400)
                .send({
                    status: 'Error',
                    data: {
                        message: 'There were validation errors in the object.',
                        errors
                    }
                });
    }

    const specKeys = JSON.stringify(Object.keys(spec));
    const dataKeys = JSON.stringify(Object.keys(data));

    if (specKeys !== dataKeys) {

        const fields = Object.keys(spec).join(', ');

        return res
                .status(400)
                .send({
                    status: 'Error',
                    data: {
                        message: `Only include these fields: ${fields}.`
                    }
                });
    }

    next();

};

module.exports = validateObject;
