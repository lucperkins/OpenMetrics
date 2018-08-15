get-sass:
	yarn

build: get-sass
	hugo

dev:
	hugo server --disableFastRender

protoc-gen-out-install:
	go get -u github.com/pseudomuto/protoc-gen-doc/cmd/protoc-gen-doc

protoc-gen-out:
	mkdir -p data
	protoc \
		--proto_path=../protos \
		--doc_out=./data \
		--doc_opt=json,proto.json \
		prometheus.proto
