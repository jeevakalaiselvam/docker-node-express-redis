# Get the base from a Alpine iamge
FROM node:alpine

# Add the path of the working directory
WORKDIR /usr/app

# Copy package JSON file to container target
COPY ./package.json ./

# Install some dependencies, Running this before next step will prevent unnecessary rebuilds
RUN npm install

# Copy data from outside directory to current working directory in container
COPY ./ ./

# Default command to run at start
CMD ["npm","start"]

#Build example
#docker build -t jeevakalaiselvam:nodestarter
#docker run -p 8080:8080 jeevakalaiselvam:nodestarter //To run in current process
#docker run -d -p 8080:8080 jeevakalaiselvam:nodestarter //To run in background process