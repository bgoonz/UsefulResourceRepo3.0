/*
   Copyright 2018 Makoto Consulting Group, Inc.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
 */
'use strict';
// Use JavaScript destructuring assignemnt (new in ES6!) to get the processFileXyz function
const { processFilePyramid } = require('./file-processor');
// or
// const processFilePyramid = require('./file-processor').processFilePyramid;
const logger = require('./simple-logger');
logger.setLogLevel(logger.Level.TRACE);
//***********************************************************
//*                         MAIN LINE                       *
//***********************************************************
// Location of the data directory
const DATA_DIR = '../data';
// The file name to be processed
const FILE_NAME = '1mWords.txt';
// mainline JS function - runs first before the event loop gets involved - invoke as IIFE
(function mainline() {
  // Capture start time
  const startTime = process.hrtime();
  // Output a message. Main flow of executing starting...
  logger.info('mainline(): Start... ***', startTime);
  // File to be processed
  let fileName = DATA_DIR + '/' + FILE_NAME;
  logger.debug('mainline(): Processing file: ' + fileName + '...', startTime);
  // Let's roll!
  processFilePyramid(fileName, (err, outputFileName) => {
    if (err) {
      logger.error('Something has gone horribly wrong: ' + err.message);
    } else {
      // The results are in!
      logger.info(
        "(anonymous results callback)(): Output file name: '" +
          outputFileName +
          "'",
        startTime
      );
    }
  });
  // And, we're done
  logger.info('mainline(): End. ***', startTime);
})();
