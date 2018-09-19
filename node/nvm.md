# nvm

* Node Version Manager，其是通过shell脚本实现的。

## 安装方式有两种：

* `$ curl https://raw.github.com/creationix/nvm/v0.4.0/install.sh | sh`
* `$ wget -qO- https://raw.github.com/creationix/nvm/v0.4.0/install.sh | sh`

以上脚本会把nvm库clone到~/.nvm，然后会在~/.bash_profile, ~/.zshrc或`~/.profile末尾添加source，

## 安装node

$nvm install 8.4.0 

## 使用指定的版本

$ nvm use 8.4.0 

## 查看当前已经安装的版本

$ nvm ls  
         v8.4.0  
->     v10.10.0

## 查看正在使用的版本

$ nvm current  
v10.10.0

## 以指定版本执行脚本

$ nvm run 0.10.24 myApp.js

## 卸载nvm

$ rm -rf ~/.nvm