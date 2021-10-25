const request = require('request');
const { Router } = require('express');
const { isUri } = require('valid-url');

module.exports = (req, res) => {
    const url = String(req.body.url).trim();

    if (isUri(url)) {
        request({
            timeout: 5000,
            url
        }, (error, response, body) => {
            if (error) {
                res.status(400).json({ error: `Error ${error.code || 'unknown'}` });
            } else if (response.statusCode === 200) {
                res.status(200).json({ body, error: null });
            } else {
                res.status(400).json({ error: `Error ${response.statusCode}` });
            }
        });
    } else {
        res.status(400).json({ error: 'Wrong URL format' });
    }
};
