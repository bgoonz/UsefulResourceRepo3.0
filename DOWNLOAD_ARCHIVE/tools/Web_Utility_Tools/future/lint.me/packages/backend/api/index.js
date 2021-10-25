const { Router } = require('express');
const lint = require('./lint');
const proxy = require('./proxy');

const router = Router();

router
    .use('/lint', lint)
    .use('/proxy', proxy)


module.exports = router;
