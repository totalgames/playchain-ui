# FROM node:10.16.0-stretch
FROM node:9.11.2-stretch

ARG PLAYCHAIN

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
RUN npm run build-${PLAYCHAIN}

EXPOSE 80

## Copying default configuration
ADD conf/nginx.conf /etc/nginx/nginx.conf
ADD conf/start.sh /start.sh
RUN cp -r /playchain-ui/build/dist/* /var/www/ \
    && chmod a+x /start.sh

## Entry point
ENTRYPOINT ["/start.sh"]
