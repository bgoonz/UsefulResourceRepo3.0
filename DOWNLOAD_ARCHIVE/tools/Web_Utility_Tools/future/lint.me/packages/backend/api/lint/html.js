const validator = require('html-validator');

module.exports = async (req, res) => {
    const { code } = req.body;

    if (!code) {
        return res.json({ warnings: [{ text: 'Code cannot be falsy' }] });
    }

    validator({
        format: 'text',
        data: code
    }, (err, resultsStr) => {
        if (err) {
            return res.status(500).json({ warnings: [{ text: `${err}` }] });
        }

        if (resultsStr.includes('The document validates according to the specified schema(s).')) {
            res.json({ warnings: [] });
        } else {
            const results = resultsStr.split('\n').reduce((previousValue, currentValue, index, arr) => {
                if(index % 2 === 0) {
                    previousValue.push(arr[index]);
                } else {
                    previousValue[previousValue.length - 1] += `\n${arr[index]}`;
                }

                return previousValue;
            }, []).map(text => ({ text }));

            results.pop();

            res.json({ warnings: results });
        }
    });
};
