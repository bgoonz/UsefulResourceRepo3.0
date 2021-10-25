# fp-docker

Repository for base docker image

For build base image run:
```bash
# docker build -t docker_hub_user/docker_hub_repository:image_tag .
docker build -t fastpencil/base:0.0.1 .
docker push fastpencil/base:0.0.1
```

After this you can use this base image in project Dockerfile
```
# ...
FROM fastpencil/base:0.0.1
# ...
```
