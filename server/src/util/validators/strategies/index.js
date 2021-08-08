const exists = require('./exists');
const dataType = require('./data-type');
const maxInclusive = require('./max-inclusive');
const minInclusive = require('./min-inclusive');
const maxLengthInclusive = require('./max-length-inclusive');
const minLengthInclusive = require('./min-length-inclusive');

const validators = {
    exists,
    dataType,
    maxInclusive,
    minInclusive,
    maxLengthInclusive,
    minLengthInclusive
};

module.exports = validators;
