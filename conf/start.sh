#!/bin/bash

# We build the wallet each time we run the docker and it takes a couple of minutes
echo ">> npm run build"
npm run build

echo ">> cp -r /bitshares-ui/build/dist/* /var/www/"
cp -r /bitshares-ui/build/dist/* /var/www/

echo "nginx -g 'daemon off;'"
nginx -g "daemon off;"
