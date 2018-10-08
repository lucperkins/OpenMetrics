#!/bin/bash

/usr/local/bin/protoc \
  -I ../protos \
  --doc_out=data \
  --doc_opt=json,protobuf.json \
  prometheus.proto
