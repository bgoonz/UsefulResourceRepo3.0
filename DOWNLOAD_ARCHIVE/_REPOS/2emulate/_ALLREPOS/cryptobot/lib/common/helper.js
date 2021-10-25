const chalk = require('chalk');
const debug = require('debug')('crybot:helper');

function callback(err, response, data) {
  if (err) {
    console.error('callback.error: ', chalk.red(err));
    console.error('callback.error: ', new Error(err));
  }

  if (response && response.statusCode !== 200) {
    console.log(chalk.blue(`Status code: ${response.statusCode}`));
  }

  console.log('data:', chalk.green(JSON.stringify(data, null, 2)));
}

module.exports = {
  callback
};