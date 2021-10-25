const fs = require('fs');

const files = fs.readdirSync('lodash')
	.filter(file => !file.startsWith('.') && file.endsWith('.js'))
	.sort();

let index = files
	.map(file => `import { default as ${file.slice(0, -3)} } from './lodash/${file}';`).join('\n');

index += `\nmodule.exports = { ${files.map(file => file.slice(0, -3)).join(", ")} };`

fs.writeFileSync('index.js', index);