var MongoClient = require('mongodb').MongoClient,
  co = require('co');
  test = require('assert');

async function t() {
  var db = await MongoClient.connect('mongodb://localhost:27017/test');

  // Some docs for insertion
  var docs = [{
    title: "this is my title", author: "bob", posted: new Date(),
    pageViews: 5, tags: ["fun", "good", "fun"], other: { foo: 5 },
    comments: [
      { author: "joe", text: "this is cool" }, { author: "sam", text: "this is bad" }
    ]
  }];

  // Create a collection
  var collection = db.collection('aggregationExample2_with_generatorsGenerator');

  // Insert the docs
  await collection.insertMany(docs, { w: 1 });

  // Execute aggregate, notice the pipeline is expressed as an Array
  var cursor = collection.aggregate([
    {
      $project: {
        author: 1,
        tags: 1
      }
    },
    { $unwind: "$tags" },
    {
      $group: {
        _id: { tags: "$tags" },
        authors: { $addToSet: "$author" }
      }
    }
  ], { cursor: { batchSize: 1 } });

  // Get all the aggregation results
  var docs = await cursor.toArray();
  console.log('docs', JSON.stringify(docs));
  test.equal(2, docs.length);
  db.close();
};

t();