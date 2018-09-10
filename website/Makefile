PROTOC_VERSION=3.6.0

get-sass:
	yarn

netlify-production-build: get-sass
	hugo

netlify-staging-build: get-sass
	hugo -b $(DEPLOY_PRIME_URL)

dev:
	hugo server --disableFastRender

setup-linux: protobuf-docs-setup-linux get-sass

setup-macos: protobuf-docs-setup-macos get-sass

protobuf-docs-setup-linux:
	# Install protoc
	curl -OL https://github.com/google/protobuf/releases/download/v$(PROTOC_VERSION)/protoc-$(PROTOC_VERSION)-linux-x86_64.zip
	sudo unzip -o protoc-$(PROTOC_VERSION)-linux-x86_64.zip -d /usr/local bin/protoc
	rm -rf protoc-$(PROTOC_VERSION)-linux-x86_64.zip

	# Install the protoc-gen-doc plugin for protoc
	go get -u github.com/pseudomuto/protoc-gen-doc/cmd/protoc-gen-doc

protobuf-docs-setup-macos:
	# Install protoc
	curl -OL https://github.com/google/protobuf/releases/download/v$(PROTOC_VERSION)/protoc-$(PROTOC_VERSION)-osx-x86_64.zip
	sudo unzip -o protoc-$(PROTOC_VERSION)-osx-x86_64.zip -d /usr/local bin/protoc
	rm -rf protoc-$(PROTOC_VERSION)-osx-x86_64.zip

	# Install the protoc-gen-doc plugin for protoc
	go get -u github.com/pseudomuto/protoc-gen-doc/cmd/protoc-gen-doc

protobuf-docs-linux: protobuf-docs-setup-linux
	scripts/protobuf-docs.sh

protobuf-docs-macos: protobuf-docs-setup-macos
	scripts/protobuf-docs.sh
