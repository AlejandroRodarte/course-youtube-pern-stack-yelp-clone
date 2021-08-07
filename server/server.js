const path = require('path');

require('dotenv').config({
    path: path.resolve(__dirname, 'config', `.env.${process.env.NODE_ENV}`)
});

const app = require('./app');

const port = process.env.PORT || 3005;

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
});