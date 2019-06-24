#!/bin/bash

echo '>> PLAYCHAIN = '$PLAYCHAIN

if [ -z "$PLAYCHAIN" ]; then
    PLAYCHAIN=prod
fi

# We build the wallet each time we run the docker and it takes a couple of minutes
echo ">> npm run build"-$PLAYCHAIN
npm run build-$PLAYCHAIN
wait

echo ">> cp -r /playchain-ui/build/dist/* /var/www/"
cp -r /playchain-ui/build/dist/* /var/www/

echo "nginx -g 'daemon off;'"
nginx -g "daemon off;"
