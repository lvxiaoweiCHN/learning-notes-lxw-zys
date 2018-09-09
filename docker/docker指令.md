# 镜像操作
## images
查看本地镜像
```
docker images
```
## export
将镜像导出到文件，cbe3cb7799ed为容器ID
```
docker export cbe3cb7799ed > update.tar
```
## import
创建一个新静像从基于导出的文件，update为新导入的镜像名称。
```
docker import - update < update.tar
```

# 创建自定义网络
```
docker network create gitlab-net
```
# 通过镜像，运行容器
```
    --hostname gitlab.example.com \
    -p 80:80 \
    -p 443:443 \
    -p 22:22 \
    --name gitlab \
    --restart unless-stopped \
    -v gitlab-config:/etc/gitlab \
    -v gitlab-logs:/var/log/gitlab \
    -v gitlab-data:/var/opt/gitlab \
    --network gitlab-net \
    twang2218/gitlab-ce-zh:11.1.4
```
# 进入容器内部
```
docker exec -it gitlab bash
```
# 操作容器
```
docker stop gitlab
docker rm gitlab
docker network rm gitlab-net
docker volume rm gitlab-config gitlab-datagitlab-logs
```