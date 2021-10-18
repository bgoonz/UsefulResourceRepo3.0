/*
   Copyright 2018 Makoto Consulting Group, Inc.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   
 */
// Example 7 - Formatting - printf
// require Winston
const winston = require('winston');

// The Logger Category (functional area)
const CATEGORY = 'example-7';

// Logger configuration
const logConfiguration = {
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.label({ 
            label: CATEGORY
        }),
        winston.format.timestamp(),
        winston.format.printf((info) => {
            return `${info.timestamp} - ${info.label}:[${info.level}]: ${info.message}`;
        })
    )
};

// Create the logger
const logger = winston.createLogger(logConfiguration);

logger.info('Howdy, Winston!');
