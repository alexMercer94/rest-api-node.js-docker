## Rest API Node.js & Docker

# Node modules

- Express
- morgan

# Commands

> To buil an docker image:

````
docker build -t <name-image>
````
``````
docker build -t node-restapi
``````

> To see all docker images:

``````
docker images
``````

> To execute app in container:

```````
docker run -it -p 4000:3000 node-restapi
```````

You have access to app in localhost:4000
