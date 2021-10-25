VictorsMBP:JavaScript-I victormontoya$ npm test

> javascript-i@1.0.0 test /Users/victormontoya/LambdaSchool/JavaScript-I
> eslint tests/*.js && eslint src/*.js && jest --verbose

Cannot read config file: /Users/victormontoya/LambdaSchool/.eslintrc.json
Error: Unexpected end of JSON input
SyntaxError: Cannot read config file: /Users/victormontoya/LambdaSchool/.eslintrc.json
Error: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at loadJSONConfigFile (/Users/victormontoya/LambdaSchool/JavaScript-I/node_modules/eslint/lib/config/config-file.js:120:21)
    at loadConfigFile (/Users/victormontoya/LambdaSchool/JavaScript-I/node_modules/eslint/lib/config/config-file.js:231:26)
    at Object.load (/Users/victormontoya/LambdaSchool/JavaScript-I/node_modules/eslint/lib/config/config-file.js:535:18)
    at loadConfig (/Users/victormontoya/LambdaSchool/JavaScript-I/node_modules/eslint/lib/config.js:63:33)
    at getLocalConfig (/Users/victormontoya/LambdaSchool/JavaScript-I/node_modules/eslint/lib/config.js:130:29)
    at Config.getConfig (/Users/victormontoya/LambdaSchool/JavaScript-I/node_modules/eslint/lib/config.js:260:26)
    at processText (/Users/victormontoya/LambdaSchool/JavaScript-I/node_modules/eslint/lib/cli-engine.js:224:33)
    at processFile (/Users/victormontoya/LambdaSchool/JavaScript-I/node_modules/eslint/lib/cli-engine.js:303:18)
    at executeOnFile (/Users/victormontoya/LambdaSchool/JavaScript-I/node_modules/eslint/lib/cli-engine.js:672:25)
npm ERR! Test failed.  See above for more details.