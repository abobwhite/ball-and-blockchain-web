FROM nginx

# Download packages
RUN apt-get update && apt-get install -y git nodejs npm

# Create a symbolic link for node, as many Node.js tools use this name to execute
RUN ln -s /usr/bin/nodejs /usr/bin/node

COPY deploy/nginx.conf /etc/nginx/nginx.conf

# Copy application files and set working dir
RUN mkdir /ball-and-blockchain-web
COPY . /ball-and-blockchain-web
WORKDIR /ball-and-blockchain-web

RUN npm set progress=false && npm install

# Rebuild node-sass due to some node versioning possible conflicts
RUN npm rebuild node-sass

#TODO: Run tests
# RUN npm test

# Building dist
RUN npm run build

# Copy dist to nginx for hosting
RUN cp -a /ball-and-blockchain-web/dist/. /usr/share/nginx/html