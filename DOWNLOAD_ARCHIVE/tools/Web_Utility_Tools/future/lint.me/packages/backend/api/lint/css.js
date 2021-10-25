const stylelint = require('stylelint');
const standard = require('stylelint-config-standard');

module.exports = async (req, res) => {
    const { settings, code } = req.body;
    try {
        const config = Object.assign({}, standard, {
            rules: Object.assign({}, standard.rules, settings, {
                'no-missing-end-of-source-newline': 'never'
            })
        });

        const { results } = await stylelint.lint({
            code,
            config
        });

        res.json({
            warnings: results[0].warnings.map(({
                column,
                line,
                text
            }) => ({
                column,
                line,
                text
            }))
        });
    } catch (e) {
        res.status(500).json({
            warnings: [{ text: e.toString() }]
        });
    }
};
