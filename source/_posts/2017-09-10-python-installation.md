---
title: Python 相关程序安装
date: 2017-09-10 17:07:16
tags:
---

Python 相关的程序实在是太多了，不仅有 Python 2 和 3，在 Mac 还可以通过 brew 安装。另外在不同的依赖管理程序（pip、conda）以及虚拟环境（virtualenv）中也可以制定不同的 Python 版本。所以非常有必要把安装设置过程写下来。

# Python 安装
参考：[链接](http://docs.python-guide.org/en/latest/starting/install/osx/)
```
brew install python
brew install python3

> python -V    # 系统 Python banben
> python2 -V   # brew Python 2 版本
> python3 -V   # brew Python 3 版本

> type python2 # python2 is /usr/local/bin/python2
> type python3 # python3 is /usr/local/bin/python3
> type python  # python is hashed (/usr/bin/python)
```

# pip 安装
通过 brew 安装 Python 的时候，会同时安装 pip。如果 pip 已然不存在，需要重现 link python：
```
brew unlink python && brew link python
```

# virtualenv 安装
```
pip install virtualenv

> virtualenv --version
```

# virutalven 使用
```
# virtualenv -p <path-to-python> <env-name>

# python 2
virtualenv -p /usr/local/bin/python2 venv

# python 3
virtualenv -p /usr/local/bin/python3 venv
```

运行后，当前目录下会出现 `venv` 文件夹，其中包括了项目所需的所有可执行文件以及 pip。


```
# 激活创建的环境
source venv/bin/activate

# 退出本地环境
deactivate
```

使用 pip 安装依赖包之后，输出当前环境
```
pip freeze > requirements.txt
```

根据要求安装依赖包
```
pip install -r requirements.txt
```
