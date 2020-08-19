# Homebrew安装

将以下命令粘贴至终端。
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

如果会出现下面的错误信息
> Failed to connect to raw.githubusercontent.com port 443: Connection refused

这是因为GitHub的raw.githubusercontent.com域名解析被污染了。（即使你翻墙了也不能正常操作）

按照一下方法更改`/etc/hosts`文件

1.  打开这个地址[ipaddress](https://www.ipaddress.com/)

2. 输入`raw.githubusercontent.com`;

3. 复制得到的`IP Address `,如，199.232.68.133;

4. 将`199.232.68.133 raw.githubusercontent.com` 添加到`hosts`文件中

5. 重新执行上面的安装命令，等待安装


中间很可能会卡在

```
Cloning into '/usr/local/Homebrew/Library/Taps/homebrew/homebrew-core'...
```

这时候直接Ctrl+C结束，通过ustc的源进行配置

```
mkdir -p /usr/local/Homebrew/Library/Taps/homebrew/
cd /usr/local/Homebrew/Library/Taps/homebrew
git clone https://mirrors.ustc.edu.cn/homebrew-core.git
```

配置完成后终端输入brew help显示帮助信息则说明安装成功，如果提示失败可以重新执行上面的安装命令，等待安装完成


如果是按照上面的方法安装的homebrew，镜像源应该已经是ustc的源，用下面的命令查看。

```
# 查看brew镜像源
git -C "$(brew --repo)" remote -v
# 查看homebrew-core镜像源
git -C "$(brew --repo homebrew/core)" remote -v
# 查看homebrew-cask镜像源（需要安装后才能查看）
git -C "$(brew --repo homebrew/cask)" remote -v 
```

如果是`https://github.com/Homebrew/brew.git`的源，需要进行修改：

```
# 修改brew镜像源
git -C "$(brew --repo)" remote set-url origin https://mirrors.ustc.edu.cn/brew.git
# 修改homebrew-core镜像源
git -C "$(brew --repo homebrew/core)" remote set-url origin https://mirrors.ustc.edu.cn/homebrew-core.git
# 修改homebrew-cask镜像源（需要安装后才能修改）
git -C "$(brew --repo homebrew/cask)" remote set-url origin https://mirrors.ustc.edu.cn/homebrew-cask.git
# 更新
brew update
```

顺便附上恢复源的地址：

```
git -C "$(brew --repo)" remote set-url origin https://github.com/Homebrew/brew.git
git -C "$(brew --repo homebrew/core)" remote set-url origin https://github.com/Homebrew/homebrew-core.git
git -C "$(brew --repo homebrew/cask)" remote set-url origin https://github.com/Homebrew/homebrew-cask.git
brew update
```

**常用命令**
```
# 安装软件
brew install [packageName]
# 卸载软件
brew uninstall [packageName]
# 列出所有安装的包名称
brew list
# 搜索需要的包名称
brew search [packageName]
# 查看信息
brew info
```






