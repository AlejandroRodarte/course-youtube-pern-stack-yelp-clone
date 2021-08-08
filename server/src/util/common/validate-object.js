const validatorStrategies = require('../validators/strategies');

const validateObject = (spec, object) => {

    const keys = Object.keys(spec);
    const errors = {};

    for (const key of keys) {

        if (!spec[key].validate) continue;

        let isValid = true;

        for (const strategy of spec[key].strategies) {

            if (!isValid) break;

            switch (strategy.type) {

                case 'exists': {
                    isValid = validatorStrategies.exists(key, object);
                    if (!isValid) errors[key] = `Field ${key} does not exist in object.`;
                    break;
                }

                case 'data-type': {
                    isValid = validatorStrategies.dataType(strategy.spec, object[key]);
                    if (!isValid) errors[key] = `Field ${key} must be of type ${strategy.spec.type}.`;
                    break;
                }

                case 'min-length-inclusive': {
                    isValid = validatorStrategies.minLengthInclusive(strategy.spec, object[key]);
                    if (!isValid) errors[key] = `Field ${key} must be at least ${strategy.spec.limit} characters long.`;
                    break;
                }

                case 'max-length-inclusive': {
                    isValid = validatorStrategies.maxLengthInclusive(strategy.spec, object[key]);
                    if (!isValid) errors[key] = `Field ${key} must be at most ${strategy.spec.limit} characters long.`;
                    break;
                }

                case 'min-inclusive': {
                    isValid = validatorStrategies.minInclusive(strategy.spec, object[key]);
                    if (!isValid) errors[key] = `Field ${key} must be at least ${strategy.spec.limit}.`;
                    break;
                }

                case 'max-inclusive': {
                    isValid = validatorStrategies.maxInclusive(strategy.spec, object[key]);
                    if (!isValid) errors[key] = `Field ${key} must be at most ${strategy.spec.limit}.`;
                    break;
                }

                default:
                    break;

            }

        }

    }

    return Object.keys(errors).length > 0 ? errors : undefined;

};

module.exports = validateObject;
