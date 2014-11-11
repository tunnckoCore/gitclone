install:
	npm install

lint:
	rm -rf node_modules week-seconds
	$(MAKE) install
	jshint bin/*.js lib/*.js test/*.js index.js

test:
	$(MAKE) lint
	@NODE_ENV=test node test.js

.PHONY: test lint
