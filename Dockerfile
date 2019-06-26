# FROM node:10.16.0-stretch
FROM node:9.11.2-stretch

ARG LIVE_TESTNET

ENV LIVE_TESTNET=${LIVE_TESTNET:-OFF}

# Install nginx
RUN apt-get update \
  && apt-get install -y nginx --no-install-recommends \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN npm install -g cross-env

# We copy the code
ADD . /playchain-ui
WORKDIR /playchain-ui

# !!! There are errors when we recreate node_modules on node:9.11.2-stretch
# RUN rm -rf node_modules \
#    && cross-env npm install --env.prod
RUN cross-env npm install --env.prod

EXPOSE 80

## Copying default configuration
ADD conf/nginx.conf /etc/nginx/nginx.conf
ADD conf/start.sh /start.sh
RUN chmod a+x /start.sh

## Entry point
ENTRYPOINT ["/start.sh"]
