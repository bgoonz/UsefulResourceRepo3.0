# log4js-appender-ratelimit-filter
Rate limiting appender filter for log4js v2+


## Configuration

The configuration requires limits containing caps for any given level(s), an interval (in ms), and an appender to filter.

The appender can either be defined in the configuration:
```json
{
    "appenders": {
        "myAppender": {
            "type": "console"
        },
        "filter": {
            "type": "log4js-appender-ratelimit-filter",
            "limits": {
                "TRACE": 5,
                "WARN": 10,
                "ERROR":10
            },
            "interval": 2000,
            "appender": "myAppender"
        }
    },
    ...
}
```

or one of the built-in core appenders:
```json
{
    "appenders": {
        "filter": {
            "type": "log4js-appender-ratelimit-filter",
            "limits": {
                "TRACE": 5,
                "WARN": 10,
                "ERROR":10
            },
            "interval": 2000,
            "appender": "console"
        }
    },
    ...
}
```

The above configurations will log up to 5 trace, debug or info messages every 2 seconds. Any log event during the 2 second interval in these levels after the first 5 will be ignored.

The rate limiting is additive in levels - the above configurations will log 5 info messages, or 15 warning messages, or 25 error messages in each time interval.
In addition, each error message will be counted towards the limit of all lower levels. 
For example, with the above configurations, if 10 error messages are logged, further debug messages within the same interval will be ignored.

The idea is to limit the amount of log messages being generated, but still let more important messages to be written even if they occur after the less important messages.