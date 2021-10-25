<!--


---
 "NodeJS : Dockerizing a Node.js app"
excerpt: "NodeJS : Dockerizing a Node.js app"
date: 2015-09-21 00:00:00 IST
updated: 2015-09-21 00:00:00 IST
categories: javascript, nodejs, docker
tags: javascript, nodejs, docker
---

-->
<!DOCTYPE html>
<html>

<head>
  <title>basic-git-workflow</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">


  <link rel="stylesheet" href="./css/bootstrap.css">
  <link rel="stylesheet" href="./css/bootstrap.grid.css">
  <link rel="stylesheet" href="./css/bootstrap.min.css">
  <link rel="stylesheet" href="./css/bootstrap-reboot.min.css">
  <link rel="stylesheet" href="./css/bootstrap.css.map">
  <link rel="stylesheet" href="./css/blog-home.css">
  <link rel="stylesheet" href="./css/prism.css">
  <script async defer src="./css/prism.js"></script>
</head>

<body>

I was working for a long time to dockernize my applications, but never happened. But today after I working on a [UDP server in NodeJS](/2015/09/udp-sever-in-nodejs.html) I dockernized it without much hassle.

I think I achieved this easily because it doesn't have any DB or any other dependencies. So I setup my docker file to setup and install node on a ubuntu.

```
# Dockerfile

FROM ubuntu
RUN apt-get install -y wget make gcc
RUN wget http://nodejs.org/dist/v4.1.0/node-v4.1.0-linux-x64.tar.gz
RUN tar -zxf node-v4.1.0-linux-x64.tar.gz
```

So now I setup my Dockerfile to install nodejs. Now I need to install the depndencies, copy my sourcecode, port forwarding and running application. So I updated my `Dockerfile` to

```
# Dockerfile

FROM ubuntu
RUN apt-get install -y wget make gcc
RUN wget http://nodejs.org/dist/v4.1.0/node-v4.1.0-linux-x64.tar.gz
RUN tar -zxf node-v4.1.0-linux-x64.tar.gz

COPY . /src
RUN cd /src; /node-v4.1.0-linux-x64/bin/npm install
EXPOSE 9030
EXPOSE 3000
CMD ["/node-v4.1.0-linux-x64/bin/node", "/src/index.js"]
```

then I build the docker image.

```sh
docker build -t revathskumar/ubuntu-node .
```

Now I can run the docker container using command

```sh
docker run -p 9030:9030 -p 3000:3000/udp -d revathskumar/ubuntu-node
```

Since docker have [docker-compose](http://docs.docker.com/compose/) now, I added `docker-compose.yml` so that I can start my container easily.

```yaml
# docker-compose.yml

notifier:
  build: .
  ports:
    - "3000:3000/udp"
    - "9030:9030"
  volumes:
    - ".:/code"
```

Now instead of long `docker run` command I can use

```sh
docker-compose up
```

docker-compose is helpful when you need more than one container for your application.
Thats it. Now I run my notifier application on docker.
