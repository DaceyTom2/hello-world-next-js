# base image
FROM node:alpine

# copy source files
COPY . /src

# create & set working directory
WORKDIR /src

# install dependencies
RUN npm install

# start app
RUN npm run build
ENTRYPOINT [ "npm", "start" ]