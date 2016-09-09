FROM nginx

# Download packages
RUN apt-get update && \
    apt-get -y install curl && \
    curl -sL https://deb.nodesource.com/setup_6.x | bash - && \
    apt-get -y install nodejs

COPY deploy/nginx.conf /etc/nginx/nginx.conf

ADD package.json /tmp/package.json
RUN cd /tmp && npm set progress=false && npm install
RUN mkdir -p /ball-and-blockchain-web && cp -a /tmp/node_modules /ball-and-blockchain-web

WORKDIR /ball-and-blockchain-web
ADD . /ball-and-blockchain-web

# Rebuild node-sass due to some node versioning possible conflicts
RUN npm rebuild node-sass

#TODO: Run tests
# RUN npm test

# Building dist
RUN npm run build

# Copy dist to nginx for hosting
RUN cp -a dist/* /usr/share/nginx/html