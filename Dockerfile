FROM node:lts-alpine

# Add bash to alpine.
RUN apk add --no-cache bash

# Create the node_modules's cache directory.
RUN mkdir /cache

# Define the node_modules's cache directory.
WORKDIR /cache

# Copy the package.json file.
COPY package.json .

# Install the application's dependencies into the node_modules's cache directory.
RUN npm install

# Remove the package.json to prevent overwriting.
RUN rm -f package.json

# Create the app directory.
RUN mkdir /app

# Change the workdir.
WORKDIR /app

# Execute the entrypoint script.
ENTRYPOINT ["/app/entrypoint.sh"]
