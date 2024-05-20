# Docker Commands & Code for Containerization

Let's containerize a Next.js Application using Docker.

## Getting Started

### Pre-requisites

docker desktop application, vs code, docker extension in vs code, node.js, npm, next.js project.

### Dockerfile for Next.js Application

Create a Dockerfile in the root of the project.

```Dockerfile
# Use the official lightweight Node.js 20 image
FROM node:20

# Set the working directory in the container
WORKDIR /code

# Copy the the root directory files "." to the working directory "/code/"
COPY . /code/

# Install dependencies
RUN npm install

# Expose the port
EXPOSE 3000

# Run the start script
CMD ["npm", "run", "dev"]
```

### Containerization using Terminal

#### Build the Docker Image

open terminal in vs code and run the following commands:

```python
# -t flag is used to tag the image (my-app), . is the current directory of the Dockerfile
docker build -t my-app .
```

#### Run the Docker Container

```python
# lists the docker images, copy image id for later use
docker image ls
```

```python
# 1. -p flag is used to map the port 3000 of the container to the port 3000 of the host machine (localhost-port:container-port; 3000:3000),
# 2. -d flag is used to run the container in detached mode (in the background),
# 3. --name flag is used to name the container (my-app),
# 4. add the copied image-id after my-app
docker run -d -p 3000:3000 --name my-app 879790c2082d
```

```python
# lists the running containers
docker ps
```

#### Access the Application

Open the browser and go to [http://localhost:3000](http://localhost:3000) to see the application running.

#### Stop the Docker Container

```python
# -f flag is used to forcefully stop the container
docker stop my-app
```

#### Remove the Docker Container

```python
# -f flag is used to forcefully remove the container
docker rm my-app
```

#### Remove the Docker Image

```python
# -f flag is used to forcefully remove the image, provide image name or id. don't provide container name or id.
docker rmi <image-id>
```
