const dataType = (spec, value) => {
    switch (spec.type) {
        case 'string':
            return typeof value === 'string';
        case 'number':
            return typeof value === 'number';
        case 'string-number':
            return typeof value === 'string' && !isNaN(+value);
        default:
            return false;
    };
};

module.exports = dataType;
