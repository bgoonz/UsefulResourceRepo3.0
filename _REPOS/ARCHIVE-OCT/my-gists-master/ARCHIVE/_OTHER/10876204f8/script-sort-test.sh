curl -XDELETE http://localhost:19200/twitter
curl -XPUT http://localhost:19200/twitter -d '{
    "settings" : {
        "index" : {
            "number_of_shards" : 1,
            "number_of_replicas" : 1
        }
    },
    "mappings" : {
        "tweet" : {
            "_source" : { "enabled" : false },
            "_id" : { "index": "not_analyzed", "store" : "yes"},
            "properties" : {
              "message": { "type": "string", "store": "yes" }
            }
        }
    }
}'

curl -XPUT 'http://localhost:19200/twitter/tweet/1' -d '{"message" : "foo"}'
curl -XPUT 'http://localhost:19200/twitter/tweet/2' -d '{"message" : "bar"}'
curl -XPUT 'http://localhost:19200/twitter/tweet/3' -d '{"message" : "baz"}'
curl -XPOST 'http://localhost:19200/twitter/_refresh'
echo 
curl -XGET 'http://localhost:19200/twitter/tweet/_search?fields=_id&pretty=true' -d '{
  "query": {
    "query_string" : {
      "query" : "*:*"
    }
  },
  "sort" : {
    "_script" : {
      "script" : "friends_visits_ids.contains(_fields._id.value)",
      "type" : "string",
      "params": {
        "friends_visits_ids": ["1", "2"]
      }
    }
  }
}'
