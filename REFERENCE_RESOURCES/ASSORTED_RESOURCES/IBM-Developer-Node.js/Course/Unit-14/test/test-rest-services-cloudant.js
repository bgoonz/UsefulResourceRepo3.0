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

/**
 * This test class has been provided for you so you know when you're
 * finished writing code. This is test-first, or test-driven, development
 * (or one of a hundred other names this technique goes by).
 *
 * After you run npm run load-db to load the database on your machine,
 * open a terminal window and run:
 *
 * npm start
 *
 * Then open **another terminal window** and run this test:
 *
 * npm test
 *
 * and watch it fail. Study the code, look
 * for the TODOs throughout, and write code until the functional
 * tests in this class pass. At that point, you're finished.
 *
 * Cheers,
 * The Test Lead
 */

// Do not check camelcase for this file
/* eslint camelcase: 0 */
/* eslint max-len: 0 */

// UUID generator
const uuidv4 = require('uuid/v4');

// Mocha stuff
const { after, before, describe, it } = require('mocha');
const { expect } = require('chai');

// Logger
const logger = require('../utils/logger');
// logger.setLogLevel(logger.Level.DEBUG);

// HTTP request helper
const request = require('../utils/utils').httpRequest;

const utils = require('../utils/utils');

let db;
// Fake IDs for functional test
const ftItemId = uuidv4();
const ftUpc = '123456789012'; // seems simple enough
const ftBrand = 'Fake Brand';
const ftItemDescription = 'Fake item for functional test';

// Result objects, used for cleanup
let testResults = [];

before(function (done) {
  utils
    .dbCloudantConnect()
    .then((database) => {
      db = database;
      // Insert item record
      let item = {
        _id: ftItemId,
        type: 'item',
        itemDescription: ftItemDescription,
        upc: ftUpc,
        brand: ftBrand,
      };
      db.insert(item, item._id, (err, result) => {
        if (err) {
          logger.error(
            'Error occurred while creating item record: ' +
              JSON.stringify(item),
            'handleItemDocument()'
          ); // eslint-disable-line max-len
          throw err;
        }
        if (result.ok) {
          logger.info('Setup complete. Tests commencing...');
          testResults.push(result);
          logger.info('Created test item: ' + JSON.stringify(result));
          done(); // VERY important
        } else {
          throw new Error('TEST FAILED: ' + JSON.stringify(result));
        }
      });
    })
    .catch((err) => {
      logger.error('Failure to launch: ' + err.message, 'before()');
    });
});

after(function () {
  this.timeout(10000); //eslint-disable-line no-invalid-this
  // TODO: cleanup all fixtures added for this test
  logger.info('Cleaning up. One moment...', 'after()');
  testResults.forEach((cleanup) => {
    db.destroy(cleanup.id, cleanup.rev, (err, result) => {
      if (err) {
        // Log and keep going, there are other objects to delete
        logger.warn(
          'Error deleting fake item record: ' +
            JSON.stringify(cleanup) +
            ', Error message:' +
            err.message,
          'after()'
        );
      } else {
        logger.info(
          'Fake object delete successful: ' + JSON.stringify(result),
          'after()'
        );
      }
    });
    utils.eatCpu(500);
  });
});

describe('GET /rest/items?id=' + ftItemId, function testItemFindById() {
  it(`should return the item with id = ${ftItemId} and upc ${ftUpc} (and lots more)`, (done) => {
    const expected_item_id = ftItemId;
    const expected_item_description = ftItemDescription;
    const expected_upc = ftUpc;
    const expected_brand = ftBrand;
    request('GET', `/rest/items?id=${expected_item_id}`, null, (err, data) => {
      if (err) {
        logger.error(
          `TEST FAILED with message: ${err.message} `,
          'testItemFindById()'
        );
        return;
      }
      // If not an error, then process the request data
      if (data) {
        try {
          logger.debug('Raw response data: ' + data, 'testItemFindById()');
          // This request returns JSON data
          let jsonData = JSON.parse(data);
          // Assert on enough data that we know it works
          expect(jsonData._id).to.equal(expected_item_id);
          expect(jsonData.itemDescription).to.equal(expected_item_description);
          expect(jsonData.upc).to.equal(expected_upc);
          expect(jsonData.brand).to.equal(expected_brand);
          // expect(jsonData.brand_description).to.equal(expected_brand_description);
          // expect(jsonData.manufacturer).to.equal(expected_brand_manufacturer);
          logger.debug('TEST PASSED', 'testItemFindById()');
        } catch (err) {
          logger.error(`TEST FAILED. Try again.`, 'testItemFindById()');
          logger.error(`ERROR MESSAGE: ${err.message}.`, 'testItemFindById()');
          throw new Error('Test failed with message: ' + err.message);
        }
      } else {
        let message =
          'testFindItemById(): TEST FAILED. No data to be processed. Try again.';
        logger.error(message, 'testItemFindById()');
        throw new Error(message);
      }
      done();
    });
  });
});

describe('GET /rest/items?description=Free Range', function testItemFindByDescription() {
  it('should return 15 items', function (done) {
    this.timeout(5000); //eslint-disable-line no-invalid-this
    const expectedNumberOfResults = 15;
    request('GET', `/rest/items?description=Free Range`, null, (err, data) => {
      if (err) {
        logger.error(
          `TEST FAILED with message: ${err.message} `,
          'testItemFindByDescription()'
        );
        return;
      }
      // If not an error, then process the request data
      if (data) {
        try {
          logger.debug(
            'Raw response data: ' + data,
            'testItemFindByDescription()'
          );
          // This request returns JSON data
          let jsonData = JSON.parse(data);
          // Assert on enough data that we know it works
          expect(jsonData.length).to.equal(expectedNumberOfResults);
          logger.debug('TEST PASSED', 'testItemFindByDescription()');
        } catch (err) {
          logger.error(
            `TEST FAILED. Try again.`,
            'testItemFindByDescription()'
          );
          logger.error(
            `ERROR MESSAGE: ${err.message}.`,
            'testItemFindByDescription()'
          );
          throw new Error('Test failed with message: ' + err.message);
        }
      } else {
        let message =
          'testItemFindByDescription(): TEST FAILED. No data to be processed. Try again.';
        logger.error(message, 'testItemFindByDescription()');
        throw new Error(message);
      }
      done();
    });
  });
});

describe('GET /rest/items?upc=' + ftUpc, function testItemFindByUpc() {
  it('should return the matching item', function (done) {
    this.timeout(5000); //eslint-disable-line no-invalid-this
    const expected_item_id = ftItemId;
    const expected_item_description = ftItemDescription;
    const expected_upc = ftUpc;
    const expected_brand = ftBrand;
    request('GET', `/rest/items?upc=${ftUpc}`, null, (err, data) => {
      if (err) {
        logger.error(
          `TEST FAILED with message: ${err.message} `,
          'testItemFindByUpc()'
        );
        return;
      }
      // If not an error, then process the request data
      if (data) {
        try {
          logger.debug('Raw response data: ' + data, 'testItemFindByUpc()');
          // This request returns JSON data
          let jsonData = JSON.parse(data);
          // Assert on enough data that we know it works
          expect(jsonData.docs[0]._id).to.equal(expected_item_id);
          expect(jsonData.docs[0].itemDescription).to.equal(
            expected_item_description
          );
          expect(jsonData.docs[0].upc).to.equal(expected_upc);
          expect(jsonData.docs[0].brand).to.equal(expected_brand);
          logger.debug('TEST PASSED', 'testItemFindByUpc()');
        } catch (err) {
          logger.error(`TEST FAILED. Try again.`, 'testItemFindByUpc()');
          logger.error(`ERROR MESSAGE: ${err.message}.`, 'testItemFindByUpc()');
          throw new Error('Test failed with message: ' + err.message);
        }
      } else {
        let message =
          'testItemFindByUpc(): TEST FAILED. No data to be processed. Try again.';
        logger.error(message, 'testItemFindByUpc()');
        throw new Error(message);
      }
      done();
    });
  });
});

describe('POST /rest/lists', function testListsCreate() {
  it('should return the non-null ID of the newly created shopping list', (done) => {
    request(
      'POST',
      `/rest/lists`,
      `{ "description" : "testListsCreate()" }`,
      (err, data) => {
        if (err) {
          logger.error(
            `TEST FAILED with message: ${err.message} `,
            'testListsCreate()'
          );
          return;
        }
        // If not an error, then process the request data
        if (data) {
          try {
            logger.debug('Raw response data: ' + data, 'testListsCreate()');
            // This request returns JSON data
            let jsonData = JSON.parse(data);
            // Expect there to be a non-null property called createdId
            expect(jsonData.createdId).to.be.not.null;
            // Store the list id and rev so it can be cleaned up
            testResults.push({
              id: jsonData.createdId,
              rev: jsonData.createdRevId,
            });
            logger.debug('TEST PASSED', 'testListsCreate()');
          } catch (err) {
            logger.error(`TEST FAILED. Try again.`, 'testListsCreate()');
            logger.error(`ERROR MESSAGE: ${err.message}.`, 'testListsCreate()');
            throw new Error('Test failed with message: ' + err.message);
          }
        } else {
          let message =
            'testListsCreate(): TEST FAILED. No data to be processed. Try again.';
          logger.error(message, 'testListsCreate()');
          throw new Error(message);
        }
        done();
      }
    );
  });
});

describe('GET /rest/lists/:listId', function testListsFindById() {
  it('should return the shopping list that was just created', (done) => {
    request(
      'POST',
      `/rest/lists`,
      `{ "description" : "Test Shopping List for testListsFindById()" }`,
      (err, data) => {
        // eslint-disable-line max-len
        if (err) {
          logger.error(
            `TEST FAILED with message: ${err.message} `,
            'testListsFindById()'
          );
          return;
        }
        // If not an error, then process the request data
        if (data) {
          try {
            logger.debug('Raw response data: ' + data, 'testListsFindById()');
            // This request returns JSON data
            let jsonData = JSON.parse(data);
            // Store the list id and rev so it can be cleaned up
            testResults.push({
              id: jsonData.createdId,
              rev: jsonData.createdRevId,
            });
            // Expect there to be a non-null property called createdId
            expect(jsonData.createdId).to.be.not.null;
            let newListId = jsonData.createdId;
            request('GET', `/rest/lists/${newListId}`, '{}', (err, data) => {
              if (err) {
                logger.error(
                  `TEST FAILED with message: ${err.message} `,
                  'testListsFindById()'
                );
                return;
              }
              // If not an error, then process the request data
              if (data) {
                try {
                  logger.debug(
                    'Raw response data: ' + data,
                    'testListsFindById()'
                  );
                  // This request returns JSON data
                  let jsonData = JSON.parse(data);
                  // Assert on enough data that we know it works
                  // If we get back the ID, it worked
                  expect(jsonData.id).to.equal(newListId);
                  logger.debug('TEST PASSED', 'testListsFindById()');
                } catch (err) {
                  logger.error(
                    `TEST FAILED. Try again.`,
                    'testListsFindById()'
                  );
                  logger.error(
                    `ERROR MESSAGE: ${err.message}.`,
                    'testListsFindById()'
                  );
                  throw new Error('Test failed with message: ' + err.message);
                }
              } else {
                let message =
                  'testListsFindById(): TEST FAILED. No data to be processed. Try again.';
                logger.error(message, 'testListsFindById()');
                throw new Error(message);
              }
              done();
            });
          } catch (err) {
            logger.error(`TEST FAILED. Try again.`, 'testListsCreate()');
            logger.error(`ERROR MESSAGE: ${err.message}.`, 'testListsCreate()');
            throw new Error('Test failed with message: ' + err.message);
          }
        } else {
          let message =
            'testListsCreate(): TEST FAILED. No data to be processed. Try again.';
          logger.error(message, 'testListsCreate()');
          throw new Error(message);
        }
      }
    );
  });
});

describe(`POST /rest/lists/:newListId/items`, function testListsAddItem() {
  it('should return the non-null ID of the newly created shopping list item', function (done) {
    this.timeout(120000); //eslint-disable-line no-invalid-this
    request(
      'POST',
      `/rest/lists`,
      `{ "description" : "Test Shopping List for testListsAddItem()" }`,
      (err, data) => {
        // eslint-disable-line max-len
        if (err) {
          logger.error(
            `TEST FAILED with message: ${err.message} `,
            'testListsAddItem()'
          );
          return;
        }
        if (data) {
          logger.debug('Raw response data: ' + data, 'testListsAddItem()');
          let jsonData = JSON.parse(data);
          // Store the list id and rev so it can be cleaned up
          testResults.push({
            id: jsonData.createdId,
            rev: jsonData.createdRevId,
          });
          let newListId = jsonData.createdId;
          request(
            'POST',
            `/rest/lists/${newListId}/items`,
            `{ "itemId": "${ftItemId}" }`,
            (err, data) => {
              // eslint-disable-line max-len
              if (err) {
                logger.error(
                  `TEST FAILED with message: ${err.message} `,
                  'testListsAddItem()'
                );
                return;
              }
              // If not an error, then process the request data
              if (data) {
                try {
                  logger.debug(
                    'Raw response data: ' + data,
                    'testListsAddItem()'
                  );
                  // This request returns JSON data
                  let jsonData = JSON.parse(data);
                  // Store the list id and rev so it can be cleaned up
                  testResults.push({
                    id: jsonData.updatedId,
                    rev: jsonData.updatedRevId,
                  });
                  // Expect there to be a non-null property called createdId
                  expect(jsonData.updatedId).to.equal(newListId);
                  logger.debug('TEST PASSED', 'testListsAddItem()');
                } catch (err) {
                  logger.error(`TEST FAILED. Try again.`, 'testListsAddItem()');
                  logger.error(
                    `ERROR MESSAGE: ${err.message}.`,
                    'testListsAddItem()'
                  );
                  throw new Error('Test failed with message: ' + err.message);
                }
              } else {
                let message =
                  'testListsAddItem(): TEST FAILED. No data to be processed. Try again.';
                logger.error(message, 'testListsAddItem()');
                throw new Error(message);
              }
              done();
            }
          );
        }
      }
    );
  });
});

// describe(`GET /rest/lists/:listId/items`, function testListsFindByIdWithAllItems() {
//     it('should return a collection of lists whose length is > 0 and whose first item belongs to its shopping list', (done) => {// eslint-disable-line max-len
//         request('POST', `/rest/lists`, `{ "description" : "Test Shopping List for testListsFindByIdWithAllItems()" }`, (err, data) => {// eslint-disable-line max-len
//             if (err) {
//                 logger.error(`TEST FAILED with message: ${err.message} `, 'testListsFindByIdWithAllItems()');
//                 return;
//             }
//             if (data) {
//                 logger.debug('Raw response data: ' + data, 'testListsFindByIdWithAllItems()');
//                 let jsonData = JSON.parse(data);
//                 // Store the list id and rev so it can be cleaned up
//                 testResults.push({ id: jsonData.createdId, rev: jsonData.createdRevId });
//                 let newListId = jsonData.createdId;
//                 request('POST', `/rest/lists/${newListId}/items`, `{ "itemId": "${ftItemId}" }`, (err, data) => {// eslint-disable-line max-len
//                     if (err) {
//                         logger.error(`TEST FAILED with message: ${err.message} `, 'testListsAddItem()');
//                         return;
//                     }
//                     // If not an error, then process the request data
//                     if (data) {
//                         // This request returns JSON data
//                         let jsonData = JSON.parse(data);
//                         // Store the list id and rev so it can be cleaned up
//                         testResults.push({ id: jsonData.updatedId, rev: jsonData.updatedRevId });
//                         logger.debug('Raw response data: ' + data, 'testListsAddItem()');
//                         request('GET', `/rest/lists/${newListId}/items`, '{}', (err, data) => {
//                             if (err) {
//                                 logger.error(`TEST FAILED with message: ${err.message} `, 'testListsFindByIdWithAllItems()');//eslint-disable-line
//                                 return;
//                             }
//                             // If not an error, then process the request data
//                             if (data) {
//                                 try {
//                                     logger.debug('Raw response data: ' + data, 'testListsFindByIdWithAllItems(2)');
//                                     // This request returns JSON data
//                                     let jsonData = JSON.parse(data);
//                                     // Crude, but should work as a first approximation
//                                     expect(jsonData[0]._id).to.equal(ftItemId);
//                                     logger.debug('TEST PASSED', 'testListsFindByIdWithAllItems()');
//                                 } catch (err) {
//                                     logger.error(`TEST FAILED. Try again.`, 'testListsFindByIdWithAllItems()');
//                                     logger.error(`ERROR MESSAGE: ${err.message}.`, 'testListsFindByIdWithAllItems()');
//                                     throw new Error('Test failed with message: ' + err.message);
//                                 }
//                             } else {
//                                 let message = 'testListsFindByIdWithAllItems(): TEST FAILED. No data to be processed. Try again.';// eslint-disable-line max-len
//                                 logger.error(message, 'testListsFindByIdWithAllItems()');
//                                 throw new Error(message);
//                             }
//                             done();
//                         });
//                     }
//                 });
//             }
//         });
//     });
// });

describe('PUT /rest/lists/', function testListsUpdate() {
  it('should successfully update one and only one row', (done) => {
    request(
      'POST',
      `/rest/lists`,
      `{ "description" : "Test Shopping List for testListsUpdate()" }`,
      (err, data) => {
        // eslint-disable-line max-len
        if (err) {
          logger.error(
            `TEST FAILED with message: ${err.message} `,
            'testListsUpdate()'
          );
          return;
        }
        if (data) {
          if (logger.isDebug())
            logger.debug('Raw response data: ' + data, 'testListsUpdate()');
          let jsonData = JSON.parse(data);
          // Store the list id and rev so it can be cleaned up
          testResults.push({
            id: jsonData.createdId,
            rev: jsonData.createdRevId,
          });
          let newListId = jsonData.createdId;
          request(
            'PUT',
            `/rest/lists/${newListId}`,
            `{ "description" : "Updated description for Functional test for testListsUpdate()" }`,
            (err, data) => {
              // eslint-disable-line max-len
              if (err) {
                logger.error(
                  `TEST FAILED with message: ${err.message} `,
                  'testListsUpdate()'
                );
                return;
              }
              // If not an error, then process the request data
              if (data) {
                try {
                  if (logger.isDebug()) {
                    logger.debug(
                      'Raw response data: ' + data,
                      'testListsUpdate(2)'
                    );
                  }
                  // This request returns JSON data
                  let jsonData = JSON.parse(data);
                  // Store the list id and rev so it can be cleaned up
                  testResults.push({
                    id: jsonData.updatedId,
                    rev: jsonData.updatedRevId,
                  });
                  // Expect there to be a property called rowsAffected
                  expect(jsonData.updatedId).to.exist;
                  expect(jsonData.updatedRevId).to.exist;
                  // It should be equal to one. Not two. Not three. Four is right out.
                  expect(jsonData.updatedId).to.equal(newListId);
                  logger.debug('TEST PASSED', 'testListsUpdate()');
                } catch (err) {
                  logger.error(`TEST FAILED. Try again.`, 'testListsUpdate()');
                  logger.error(
                    `ERROR MESSAGE: ${err.message}.`,
                    'testListsUpdate()'
                  );
                  throw new Error('Test failed with message: ' + err.message);
                }
              } else {
                let message =
                  'testListsUpdate(): TEST FAILED. No data to be processed. Try again.';
                logger.error(message, 'testListsUpdate()');
                throw new Error(message);
              }
              done();
            }
          );
        }
      }
    );
  });
});

describe('GET /rest/lists', function testListsFindAll() {
  it('should return a collection of shopping lists whose length is > 0', function (done) {
    this.timeout(5000); //eslint-disable-line no-invalid-this
    request('GET', '/rest/lists', null, (err, data) => {
      if (err) {
        logger.error(
          `TEST FAILED with message: ${err.message}`,
          'testFindAll()'
        );
        return;
      }
      // If not an error, then process the request data
      if (data) {
        try {
          logger.debug('Raw response data: ' + data, 'testFindAll()');
          // This request returns JSON data
          let jsonData = JSON.parse(data);
          // Assert on enough data that we know it works
          // If we get back the ID, it worked
          expect(jsonData.length).to.be.greaterThan(0);
          logger.debug('TEST PASSED', 'testFindAll()');
        } catch (err) {
          logger.error(`TEST FAILED. Try again.`, 'testFindAll()');
          logger.error(`ERROR MESSAGE: ${err.message}.`, 'testFindAll()');
          throw new Error('Test failed with message: ' + err.message);
        }
      } else {
        let message =
          'testFindAll(): TEST FAILED. No data to be processed. Try again.';
        logger.error(message, 'testFindAll()');
        throw new Error(message);
      }
      done();
    });
  });
});

describe(
  'DELETE /rest/lists/:listId/items/' + ftItemId,
  function testListsRemoveItem() {
    it('should delete one and only one item', (done) => {
      request(
        'POST',
        `/rest/lists`,
        `{ "description" : "Test Shopping List for testListsRemoveItem()" }`,
        (err, data) => {
          // eslint-disable-line max-len
          if (err) {
            logger.error(
              `TEST FAILED with message: ${err.message} `,
              'testListsRemoveItem()'
            );
            return;
          }
          if (data) {
            logger.debug('Raw response data: ' + data, 'testListsRemoveItem()');
            let jsonData = JSON.parse(data);
            // Store the list id and rev so it can be cleaned up
            testResults.push({
              id: jsonData.createdId,
              rev: jsonData.createdRevId,
            });
            let newListId = jsonData.createdId;
            request(
              'POST',
              `/rest/lists/${newListId}/items`,
              `{ "itemId" : "${ftItemId}" }`,
              (err, data) => {
                // eslint-disable-line max-len
                if (err) {
                  logger.error(
                    `TEST FAILED with message: ${err.message} `,
                    'testListsRemoveItem()'
                  );
                  return;
                }
                // If not an error, then process the request data
                if (data) {
                  try {
                    logger.debug(
                      'Raw response data: ' + data,
                      'testListsRemoveItem(2)'
                    );
                    // Expect there to be a non-null property called createdId
                    request(
                      'DELETE',
                      `/rest/lists/${newListId}/items/${ftItemId}`,
                      `{}`,
                      (err, data) => {
                        if (err) {
                          logger.error(
                            `TEST FAILED with message: ${err.message} `,
                            'testListsRemoveItem()'
                          ); // eslint-disable-line max-len
                          return;
                        }
                        // If not an error, then process the request data
                        if (data) {
                          try {
                            logger.debug(
                              'Raw response data: ' + data,
                              'testListsRemoveItem(3)'
                            );
                            // This request returns JSON data
                            let jsonData = JSON.parse(data);
                            // Store the list id and rev so it can be cleaned up
                            testResults.push({
                              id: jsonData.updatedId,
                              rev: jsonData.updatedRevId,
                            });
                            // Expect there to be a property called rowsAffected
                            expect(jsonData.updatedId).to.exist;
                            expect(jsonData.updatedRevId).to.exist;
                            // It should be equal to one. Not two. Not three. Four is right out.
                            expect(jsonData.updatedId).to.equal(newListId);
                            logger.debug(
                              'TEST PASSED',
                              'testListsRemoveItem()'
                            );
                          } catch (err) {
                            logger.error(
                              `TEST FAILED. Try again.`,
                              'testListsRemoveItem()'
                            );
                            logger.error(
                              `ERROR MESSAGE: ${err.message}.`,
                              'testListsRemoveItem()'
                            );
                            throw new Error(
                              'Test failed with message: ' + err.message
                            );
                          }
                          done();
                        } else {
                          let message =
                            'testListsRemoveItem(): TEST FAILED. No data to be processed. Try again.'; // eslint-disable-line max-len
                          logger.error(message, 'testListsRemoveItem()');
                          throw new Error(message);
                        }
                      }
                    );
                  } catch (err) {
                    logger.error(
                      `TEST FAILED. Try again.`,
                      'testListsAddItem()'
                    );
                    logger.error(
                      `ERROR MESSAGE: ${err.message}.`,
                      'testListsAddItem()'
                    );
                    throw new Error('Test failed with message: ' + err.message);
                  }
                } else {
                  let message =
                    'testListsAddItem(): TEST FAILED. No data to be processed. Try again.'; // eslint-disable-line max-len
                  logger.error(message, 'testListsAddItem()');
                  throw new Error(message);
                }
              }
            );
          }
        }
      );
    });
  }
);
