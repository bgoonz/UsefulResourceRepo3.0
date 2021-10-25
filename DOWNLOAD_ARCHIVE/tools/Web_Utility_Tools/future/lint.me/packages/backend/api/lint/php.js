const validator = require('html-validator');
const { exec } = require('child-process-promise');
const { readFile, writeFile, unlink } = require('fs-promise');



module.exports = async (req, res) => {
    const { code } = req.body;

    if (!code) {
        return res.json({ warnings: [{ text: 'Code cannot be falsy' }] });
    }

    const fileName = `${__dirname}/tmp_${Date.now() + Math.random()}.php`;

    try {
        await writeFile(fileName, code);
    } catch(e) {
        res.status(500).json({ warnings: [{ text: 'Server error'}] });
    }

    try {
        const result = await exec(`php -l ${fileName}`);

        res.json({ warnings: [] });
    } catch(e) {
        res.json({ warnings: [{ text: e.toString().split('\n')[1].replace(` in ${fileName}`, '') }] });
    }

    try {
        await unlink(fileName);
    } catch(e) {}

};
