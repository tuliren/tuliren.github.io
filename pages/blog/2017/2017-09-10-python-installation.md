---
title: Python 相关程序安装
date: 2017-09-10 17:07:16
tags: [Python, 设置]
---

# Python 相关程序安装

Python 相关的程序实在是太多了，不仅有 Python 2 和 3，在 Mac 还可以通过 brew 安装。另外在不同的依赖管理程序（pip、conda）以及虚拟环境（virtualenv）中也可以制定不同的 Python 版本。所以非常有必要把安装设置过程写下来。

## Python 安装
参考：[链接](http://docs.python-guide.org/en/latest/starting/install/osx/)
```sh
brew install python
brew install python3

> python -V    # 系统 Python banben
> python2 -V   # brew Python 2 版本
> python3 -V   # brew Python 3 版本

> type python2 # python2 is /usr/local/bin/python2
> type python3 # python3 is /usr/local/bin/python3
> type python  # python is hashed (/usr/bin/python)
```

## Pip 安装
通过 brew 安装 Python 的时候，会同时安装 pip。如果 pip 依然不存在，需要重新 link python：
```sh
brew unlink python && brew link python
```

## Virtualenv 安装
参考：[链接](http://docs.python-guide.org/en/latest/dev/virtualenvs/#lower-level-virtualenv)
```sh
pip install virtualenv

> virtualenv --version
```

## Virutalenv 使用
```sh
# virtualenv -p <path-to-python> <env-name>

# python 2
virtualenv -p /usr/local/bin/python2 venv

# python 3
virtualenv -p /usr/local/bin/python3 venv
```

运行后，当前目录下会出现 `venv` 文件夹，其中包括了项目所需的所有可执行文件以及 pip。


```sh
# 激活创建的环境
source venv/bin/activate

# 退出本地环境
deactivate
```

使用 pip 安装依赖包之后，输出当前环境
```sh
pip freeze > requirements.txt
```

根据要求安装依赖包
```sh
pip install -r requirements.txt
```

## Anaconda 安装
在 [anaconda](https://www.anaconda.com/download/) 主站下载 Python3-anaconda 的安装包。安装之后，更新所有已经安装的包：
```sh
conda upgrade --all
```

如果出现 `conda command not found`，手动把 anaconda 添加到路径里去：
```sh
export PATH="/Users/<username>/anaconda/bin:$PATH"
```

## Anaconda 使用
依赖包管理
```sh
# 显示
conda list

# 安装
conda install <pagecakge-name> <more-packages>
```

环境管理
```sh
# 显示
conda env list

# 创建
conda create -n <env-name> python=<python-version> <list-of-packages>

# 创建 Python2 和 Python3
conda create -n py2 python=2
conda create -n py3 python=3

# 激活
source activate <env-name>

# 退出
source deactivate

# 导出
conda env export > environment.yaml

# 导入
conda env create -f environment.yaml
```
