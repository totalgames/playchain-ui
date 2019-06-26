#!/bin/bash

echo '>> LIVE_TESTNET = '$LIVE_TESTNET

if [ $LIVE_TESTNET = ON ]; then
    PLAYCHAIN=stage
else
    PLAYCHAIN=prod
fi

# We build the wallet each time we run the docker and it takes a couple of minutes
echo ">> npm run build"-$PLAYCHAIN
npm run build-$PLAYCHAIN
# wait

echo ">> cp -r /playchain-ui/build/dist/* /var/www/"
cp -r /playchain-ui/build/dist/* /var/www/

echo "nginx -g 'daemon off;'"
nginx -g "daemon off;"
