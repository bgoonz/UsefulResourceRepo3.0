const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));
const crypto = require('crypto');
const path = require('path');
const pathA = '.';
const pathB = './../..';
let hashes = [];

function hashDirIn(folder) {
  const pathPromiseA = fs
    .readdirAsync(folder)
    .map((fileName) => {
      const workPath = path.join(folder, fileName);
      const statPromise = fs.statAsync(workPath);
      return Promise.join(statPromise, fileName, (statPromise, fileName) => {
        if (statPromise.isFile()) {
          function makeStream(file, callback) {
            const result = fs.createReadStream(workPath);
            return callback(result);
          }

          function process(stream) {
            const hash = crypto.createHash('md5');
            return new Promise((resolve, reject) => {
              stream.on('data', function updateProcess(chunk) {
                hash.update(chunk, 'utf8');
              });
              stream.on('end', resolve);
            }).then(function publish() {
              const digest = hash.digest('hex');
              hashes.push({
                digest,
                path: workPath,
              });
            });
          }
          return makeStream(fileName, process);
        }
      });
    })
    .then(() => {
      if (i == 1) {
        hashes.sort((a, b) => {
          if (a.digest < b.digest) {
            return -1;
          }
          if (a.digest > b.digest) {
            return 1;
          }
          return 0;
        });
        let dupe = 1;
        hashes.map((obj, index) => {
          if (index - 1 >= 0) {
            if (obj.digest == hashes[index - 1].digest) {
              console.log(`Dupe ${dupe} found:`);
              console.log(obj.path);
              console.log('Equal to:');
              console.log(`${hashes[index - 1].path}\n`);
              dupe++;
            }
          }
        });
      }
      i++;
    });
}
var i = 0;
hashDirIn(pathA);
hashDirIn(pathB);
