install:
	npm install

lint:
	$(MAKE) install
	jshint ./**/*.js

test:
	$(MAKE) lint
	@NODE_ENV=test node test.js

.PHONY: test lint
