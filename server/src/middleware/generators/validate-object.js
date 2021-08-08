const common = require('../../util/common');

const validateObject = (spec, path) => (req, res, next) => {

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

    const errors = common.validateObject(spec, data);

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
        return res
                .status(404)
                .send({
                    status: 'Error',
                    data: {
                        message: 'Only include name, location, and price range.'
                    }
                });
    }

    next();

};

module.exports = validateObject;
