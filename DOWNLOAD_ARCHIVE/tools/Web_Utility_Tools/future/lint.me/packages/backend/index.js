const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./api');

const { env } = process;

const app = express();

for (const varName of ['NODE_ENV', 'PORT']) {
    if (!env[varName]) {
        throw Error(`${varName} env variable is not given`);
    }
}

const { PORT } = env;

app.use(bodyParser.json());

app.use('/api', apiRouter);

app.listen(PORT);

module.exports = app;
