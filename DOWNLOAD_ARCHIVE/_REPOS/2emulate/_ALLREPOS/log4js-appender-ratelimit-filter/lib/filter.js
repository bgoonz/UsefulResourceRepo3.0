'use strict';

// Check whether the given level limit was reached - returns whether to log (true = not reached limit).
// Also increases the current number of log for the given level
function checkLimit(limit) {
    if ((limit.limit < 0) || (limit.current < limit.limit)) {
        limit.current++;
        return true;
    }
    return false;
}

// Create filter appender
function rateFilter(limits, interval, appender, levels) {
    const levelMap = {};

    // These functions correspond to the names of the levels, to enable this code: checks["INFO"]()
    // Each function checks the limit of its level, and increases its current number, as well as for all the lower levels.
    // This way, each debug message raises the number of the debug limit, but each error message raises the limit for error, warn, info, debug, trace.
    const checks = {};
    checks.TRACE = function () {
        const limit = levelMap[levels.TRACE];
        return checkLimit(limit);
    };
    checks.DEBUG = function () {
        const limit = levelMap[levels.DEBUG];
        checks.TRACE();
        return checkLimit(limit);
    };
    checks.INFO = function () {
        const limit = levelMap[levels.INFO];
        checks.DEBUG();
        return checkLimit(limit);
    };
    checks.WARN = function () {
        const limit = levelMap[levels.WARN];
        checks.INFO();
        return checkLimit(limit);
    };
    checks.ERROR = function () {
        const limit = levelMap[levels.ERROR];
        checks.WARN();
        return checkLimit(limit);
    };
    checks.FATAL = function () {
        const limit = levelMap[levels.FATAL];
        checks.ERROR();
        return checkLimit(limit);
    };
    checks.MARK = function () {
        const limit = levelMap[levels.MARK];
        checks.FATAL();
        return checkLimit(limit);
    };

    // Initialize log level limits
    ['TRACE', 'DEBUG', 'INFO', 'WARN', 'ERROR', 'FATAL', 'MARK'].forEach(
        function (level) {
            levelMap[level] = { limit: -1, current: 0 };
        }
    );

    if (limits) {
        // Read limits from config - each level can define its own limit, but this is accumalated:
        // If debug is 10 and error is 10, the limits are 10,10,10,20,20.
        // This is so that the rate limiting will be shared on all messages, but more important messages can get precedence
        let accumulatedLimit = 0;
        if (limits.TRACE) {
            accumulatedLimit += limits.TRACE;
        }
        levelMap[levels.TRACE].limit = accumulatedLimit;
        if (limits.DEBUG) {
            accumulatedLimit += limits.DEBUG;
        }
        levelMap[levels.DEBUG].limit = accumulatedLimit;
        if (limits.INFO) {
            accumulatedLimit += limits.INFO;
        }
        levelMap[levels.INFO].limit = accumulatedLimit;
        if (limits.WARN) {
            accumulatedLimit += limits.WARN;
        }
        levelMap[levels.WARN].limit = accumulatedLimit;
        if (limits.ERROR) {
            accumulatedLimit += limits.ERROR;
        }
        levelMap[levels.ERROR].limit = accumulatedLimit;
        if (limits.FATAL) {
            accumulatedLimit += limits.FATAL;
        }
        levelMap[levels.FATAL].limit = accumulatedLimit;
        if (limits.MARK) {
            accumulatedLimit += limits.MARK;
        }
        levelMap[levels.MARK].limit = accumulatedLimit;
    }

    // Define the reset event - every second the limits are reset.
    // The interval is unreffed so that it won't keep the program running by itself
    let resetInterval = 1000;
    if ((interval) && (interval > 0)){
        resetInterval = interval;
    }

    const resetLimit = setInterval(function () {
        levelMap[levels.TRACE].current = 0;
        levelMap[levels.DEBUG].current = 0;
        levelMap[levels.INFO].current = 0;
        levelMap[levels.WARN].current = 0;
        levelMap[levels.ERROR].current = 0;
        levelMap[levels.FATAL].current = 0;
        levelMap[levels.MARK].current = 0;
    }, resetInterval);
    resetLimit.unref();
    
    // This actually handles the log events - if the event's log level is not limited, forward to the appender for writing
    return function (logEvent) {
        if (checks[logEvent.level]()) {
            appender(logEvent);
        }
    };
}

function configure(config, layouts, findAppender, levels) {
    const appender = findAppender(config.appender) || require('../node_modules/log4js/lib/appenders/' + config.appender + '.js').configure({}, layouts, findAppender, levels);
    if (appender == null) {
        throw Error('Could not find appender to filter. Configure the filter with a valid appender.');
    }
    return rateFilter(config.limits, config.interval, appender, levels);
}

exports.configure = configure;