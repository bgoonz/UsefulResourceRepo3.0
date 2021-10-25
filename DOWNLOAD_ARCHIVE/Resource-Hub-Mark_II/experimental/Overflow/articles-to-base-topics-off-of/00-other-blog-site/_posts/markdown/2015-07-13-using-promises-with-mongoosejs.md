<!--


---
 "Node.js : Using Promises with mongoosejs"
excerpt: "Node.js : Using Promises with mongoosejs to avoid callback hell"
date: 2015-07-13 00:00:00 IST
updated: 2015-07-13 00:00:00 IST
categories: javascript
tags: express, nodejs
---

-->
<!DOCTYPE html>
<html>

<head>
  <title>basic-git-workflow</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">


  <link rel="stylesheet" href="./css/bootstrap.css">
  <link rel="stylesheet" href="./css/bootstrap.grid.css">
  <link rel="stylesheet" href="./css/bootstrap.min.css">
  <link rel="stylesheet" href="./css/bootstrap-reboot.min.css">
  <link rel="stylesheet" href="./css/bootstrap.css.map">
  <link rel="stylesheet" href="./css/blog-home.css">
  <link rel="stylesheet" href="./css/prism.css">
  <script async defer src="./css/prism.js"></script>
</head>

<body>

I was using [mongoosejs](http://mongoosejs.com/) for connecting mongoDB from my NodeJS app. When an action involve mulitple queries it tend to be callback hell.

I didn't used `populate` method for loading related data to demonstate the promises.

I start with connecting mongoose with the mongoDB.

```js
// connection.js
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/my_db");

var db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection Error : "));
db.once("open", function () {
  console.log("Connection ok!");
});

module.exports = mongoose;
```

And mongoose models looks like

```js
// User model
// models/user.js
var mongoose = require("../connection");
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var UserSchema = new Schema({
  email: String,
  access_token: String,
  name: String,
  username: {
    type: String,
    required: true,
    index: { unique: true, sparse: true },
  },
});

//Project model
// models/project.js
var mongoose = require("../connection");
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var ProjectSchema = new Schema({
  name: String,
  user_id: { type: ObjectId, ref: "User" },
});

//Issue model
// models/issue.js
var mongoose = require("../connection");
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var IssueSchema = new Schema({
  title: String,
  body: String,
  project_id: { type: ObjectId, ref: "Project" },
});
```

So when I need to list all the issues of a project I need to fetch the User then the Project and the list issues of that project. Let the route for the action like `/:username/:project/issues`. So Initially my action code looks like,

```js
var User = require("./models/user");
var Project = require("./models/project");
var Issue = require("./models/issue");

exports.index = function (req, res) {
  var username = req.params.username;
  var project = req.params.project;

  User.findOne({ username: username }, function (err, user) {
    if (err) {
      console.log(err);
      return;
    }
    Project.findOne({ name: project, user: user._id }, function (err, project) {
      if (err) {
        console.log(err);
        return;
      }

      Issues.find({ project_id: project._id }, function (err, issues) {
        if (err) {
          console.log(err);
          return;
        }

        res.render("./views/issues/index", {
          user: user,
          project: poject,
          issues: issues,
        });
      });
    });
  });
};
```

But this code looks difficult to maintain for me. I usually uses promises to avoid callback hell. So I thought of using promises with mongoosejs since they have inbuilt support for it. So I rewrote my code with promises

```js
var User = require("./models/user");
var Project = require("./models/project");
var Issue = require("./models/issue");

exports.index = function (req, res) {
  var username = req.params.username;
  var project = req.params.project;

  User.findOne({ username: username })
    .exec()
    .then(function (user) {
      var result = [];
      return Project.findOne({ name: project, user_id: user._id })
        .exec()
        .then(function (project) {
          return [user, project];
        });
    })
    .then(function (result) {
      var project = result[1];
      return Issues.find({ project_id: project._id })
        .exec()
        .then(function (issues) {
          result.push(issues);
          return result;
        });
    })
    .then(function (result) {
      var user = result[0];
      var project = result[1];
      var issues = result[2];

      res.render("./views/issues/index", {
        user: user,
        project: project,
        issues: issues,
      });
    })
    .then(undefined, function (err) {
      //Handle error
    });
};
```

Have you noticed the use of `exec()` method? In mongoose, [exec](http://mongoosejs.com/docs/api.html#query_Query-exec) method will execute the query and return a **Promise**. We can make this code even better using `populate` method, Since I am learning this is far better than before and let the `populate` method be subject for another blog post. ;)

Comments are welcome.
