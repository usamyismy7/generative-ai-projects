# Docker Multi Containerization

Let's containerize a Next.js Application and PostgreSQL using Docker.

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

# Expose the port the app runs on
EXPOSE 8000

# Run the start script
CMD ["npm", "run", "dev"]
```

#### Docker Compose

Create a docker-compose.yml file in the root of the project. visit [Docker Hub](https://hub.docker.com/) to get any image you want, in my case i added postgres database image.

```yml
version: "3.8"

name: fastapi-postgres-docker
services:
  my-app:
    build: ./
    container-name: fastapi-con1
    ports:
      - "8000:8000"
  postgresdb:
    image: postgres:latest
    restart: always
    container-name: postgres-db-con1
    environments:
      - POSTGRES_HOST_AUTH_METHOD=trust
    ports:
      - "5432:5432"
```

#### Configure yaml file

```bash
docker compose config
```

#### Run the Docker Compose

```python
# -d flag is used to run the container in detached mode (in the background)
docker compose up -d
```

```bash
docker ps
```

#### Stop the Docker Compose

```bash
docker compose down
```
