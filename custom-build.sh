#!/bin/bash

npm run build

if [ "x$1" != "x" ]; then
  cp -r ./dist/* "$1"
else
  cp -r ./dist/* ../master/src/server/web/client/
fi
