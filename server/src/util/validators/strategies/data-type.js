const dataType = (spec, value) => {
    switch (spec.type) {
        case 'string':
            return typeof value === 'string';
        case 'number':
            return typeof value === 'number';
        default:
            return false;
    };
};

module.exports = dataType;
