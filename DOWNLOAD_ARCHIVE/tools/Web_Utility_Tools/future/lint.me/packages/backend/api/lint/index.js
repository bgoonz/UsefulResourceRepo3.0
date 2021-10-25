const { Router } = require('express');
const css = require('./css');
const html = require('./html');
const php = require('./php');

const router = Router();

router.post('/css', css);
router.post('/html', html);
router.post('/php', php);

module.exports = router;
