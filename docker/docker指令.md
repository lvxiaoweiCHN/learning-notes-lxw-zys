# 容器操作

## create

创建一个新的容器但不启动它。

### 语法

docker create [OPTIONS] IMAGE [COMMAND] [ARG...]

### OPTIONS

* -a stdin: 指定标准输入输出内容类型，可选 STDIN/STDOUT/STDERR 三项；
* -d: 后台运行容器，并返回容器ID；
* -i: 以交互模式运行容器，通常与 -t 同时使用；
* -p: 端口映射，格式为：主机(宿主)端口:容器端口
* -t: 为容器重新分配一个伪输入终端，通常与 -i 同时使用；
* --name="nginx-lb": 为容器指定一个名称；
* --dns 8.8.8.8: 指定容器使用的DNS服务器，默认和宿主一致；
* --dns-search example.com: 指定容器DNS搜索域名，默认和宿主一致；
* -h "mars": 指定容器的hostname；
* -e username="ritchie": 设置环境变量；
* --env-file=[]: 从指定文件读入环境变量；
* --cpuset="0-2" or --cpuset="0,1,2": 绑定容器到指定CPU运行；
* -m :设置容器使用内存最大值；
* --net="bridge": 指定容器的网络连接类型，支持 bridge/host/none/container: 四种类型；
* --link=[]: 添加链接到另一个容器；
* --expose=[]: 开放一个端口或一组端口；

### 例子

```bash
#!/bin/bash
docker create --name test -d IMAGES
```

## 镜像操作

## images

查看本地镜像

```bash
#!/bin/bash
docker images
```

## export

将镜像导出到文件，cbe3cb7799ed为容器ID

```bash
docker export cbe3cb7799ed > update.tar
```

## import

创建一个新静像从基于导出的文件，update为新导入的镜像名称。

```bash
docker import - update < update.tar
```

## 创建自定义网络

```bash
docker network create gitlab-net
```

## 通过镜像，运行容器

```bash
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

## 进入容器内部

```bash
docker exec -it gitlab bash
```

## 操作容器

```bash
docker stop gitlab
docker rm gitlab
docker network rm gitlab-net
docker volume rm gitlab-config gitlab-datagitlab-logs
```