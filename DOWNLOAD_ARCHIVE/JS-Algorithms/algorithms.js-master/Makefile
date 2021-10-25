all: lint coverage

setup:
	npm install

dist: all
	rm -rf _build
	mkdir _build
	cp -r src/* _build
	cp package.json _build
	cp LICENSE _build
	cp AUTHORS _build
	cp README.md _build
	cp CHANGELOG _build

lint: setup
	npm run lint

test: lint
	npm test

coverage: setup
	istanbul cover ./node_modules/.bin/_mocha -- -R spec --recursive src/test

coveralls:
	cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js

VERSION := $(shell node -e "console.log(require('./package.json').version);")
browser_bundle: setup
	browserify $(realpath src/index.js) --s algorithms | uglifyjs -c -m  --wrap --beautify preamble "/* algorithms.js v$(VERSION) | (c) 2015 Felipe Ribeiro | https://github.com/felipernb/algorithms.js/blob/master/LICENSE */" > bundle/algorithms.browser.min.js

