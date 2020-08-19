# nvm的安装使用

本文主要是记录`brew`安装`nvm`的过程

**安装**

```
 brew install nvm
```

根据终端提示 配置你的环境变量`.zshrc`或者`.bash_profile`, 然后使用命令`sh .zshrc`或者`.bash_profile`让他生效

如果终端没有提示： 请使用 brew info nvm 查看安装信息，配置环境变量

例如:
```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

**常用命令**

```
//查看当前版本
nvm --version

//查看远程已经存在的版本
nvm ls-remote

//下载指定版本nodejs
nvm install v8.9.0 // vx.x.x

//查看当前使用版本
nvm current

//使用指定版本
nvm use v8.9.1 // vx.x.x

//查看已经安装的nodejs版本
nvm list

//设置默认版本
nvm alias default v[版本号]

//查看nodejs版本
node --version
```