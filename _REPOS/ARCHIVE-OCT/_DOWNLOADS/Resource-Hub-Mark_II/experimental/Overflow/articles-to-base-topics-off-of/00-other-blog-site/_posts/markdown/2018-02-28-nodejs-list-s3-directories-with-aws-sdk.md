<!--


---
 'NodeJS : List S3 directories with AWS SDK'
date: 2018-02-28 00:02:00 IST
updated: 2018-02-28 00:02:00 IST
categories: nodejs, aws
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

When we use [aws-sdk][aws-sdk] to [list objects][api-list-objects] in s3 bucket it will list objects without any seperation between `directories` and `files`. The easy way to list all directories is to use `Delimiter` option.

Use `Delimiter` as `/` will result in list of `CommonPrefixes` in the response.

```js
var AwsS3 = require ('aws-sdk/clients/s3');
const s3 = new AwsS3 ({
  accessKeyId: '',
  secretAccessKey: '',
  region: 'ap-south-1',
});

const listDirectories = params => {
  return new Promise ((resolve, reject) => {
    const s3params = {
      Bucket: 'bucket-name',
      MaxKeys: 20,
      Delimiter: '/',
    };
    s3.listObjectsV2 (s3params, (err, data) => {
      if (err) {
        reject (err);
      }
      resolve (data);
    });
  });
};
```
The above code will list the directories in the bucket root.
The sample response will look like

```json
{
  "IsTruncated": false,
  "Contents": [],
  "Name": "bucket-name",
  "Prefix": "",
  "Delimiter": "/",
  "MaxKeys": 20,
  "CommonPrefixes": [
    {
      "Prefix": "directory-1/"
    },
    {
      "Prefix": "directory-2/"
    },
    {
      "Prefix": "directory-3/"
    },
    {
      "Prefix": "directory-4/"
    }
  ],
  "KeyCount": 4
}
```

If we want to list the directories inside the one of the listed directory, Pass the directory name as `Prefix`.

```js
const listDirectories = params => {
  return new Promise ((resolve, reject) => {
    const s3params = {
      Bucket: 'bucket-name',
      MaxKeys: 20,
      Delimiter: '/',
      Prefix: 'directory-1/'
    };
    s3.listObjectsV2 (s3params, (err, data) => {
      if (err) {
        reject (err);
      }
      resolve (data);
    });
  });
};
```

Hope it helped.  
Let me know if you have any feedback or corrections via comments

[aws-sdk]: https://www.npmjs.com/package/aws-sdk
[api-list-objects]: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#listObjectsV2-property
