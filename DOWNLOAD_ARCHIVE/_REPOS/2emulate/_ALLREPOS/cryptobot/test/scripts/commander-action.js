var program = require('commander');

program
  .version('0.1.0')
  // .command('rmdir <dir> [otherDirs...]')
  // .action(function (dir, otherDirs) {
  //   console.log('rmdir %s', dir);
  //   if (otherDirs) {
  //     otherDirs.forEach(function (oDir) {
  //       console.log('rmdir %s', oDir);
  //     });
  //   }
  // })
  .command('ticker')
  .option('-p, --provider <provider>', 'provider: products id. e.g. gdax:BTC-USD,ETH-USD', parseToObjectList, {})
  .option('-m, --modifier <modifier>', 'modifier: products id. e.g. bufferTime:30000', parseToObject, {})
  .action(function (options) {
    // console.log(other);
    console.log(options.provider)
    console.log(options.modifier)
    // console.log(options)
  });

program.parse(process.argv);

function parseToObjectList(val, map) {
  // console.log(val)
  const [provider, productIds] = val.split(':');
  map[provider] = productIds.split(',');
  return map;
}

function parseToObject(val, map) {
  const [key, value] = val.split(':');
  map[key] = value;
  return map;
}