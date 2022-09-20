FROM node:14-alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


RUN chown node:node /usr/src/app
USER node

# RUN chown node:node /node/app
# USER node

# copying all the files from your file system to container file system
# COPY --chown=node:node package*.json ./

COPY --chown=node:node app ./app

COPY --chown=node:node *.json ./

COPY --chown=node:node .env ./

COPY --chown=node:node ./node_modules ./node_modules

# COPY --chown=node:node node_modules ./node_modules

# RUN npm install
# install all dependencies
# RUN npm install

# copy oter files as well
# COPY --chown=node:node . .

#expose the port
EXPOSE 8080

# command to run when intantiate an image