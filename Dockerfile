# FROM node:10.16.0-stretch
FROM node:9.11.2-stretch

# Install nginx
RUN apt-get update \
  && apt-get install -y nginx --no-install-recommends \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN npm install -g cross-env

# We copy the code
ADD . /playchain-ui
WORKDIR /playchain-ui

# !!! There are some version errors in package
# Required npm install on host machine before (Ubuntu 18.04)
# RUN rm -rf node_modules \
#   && cross-env npm install --env.prod

EXPOSE 80

## Copying default configuration
ADD conf/nginx.conf /etc/nginx/nginx.conf
ADD conf/start.sh /start.sh
RUN chmod a+x /start.sh

## Entry point
ENTRYPOINT ["/start.sh"]
