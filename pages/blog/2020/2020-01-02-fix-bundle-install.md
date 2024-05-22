---
title: bundle install 问题二则
date: 2020-01-05 12:15:37
---

# bundle install 问题二则

每次在新电脑上运行老旧的 `Rails` 项目都有很多问题，之前写过 [mysql2](https://www.tuliren.dev/2019/06/24/install-mysql2-gem/)，今天是安装 `Ruby` 和 `nokogiri`。

## `rbenv install`

安装项目对应的 `Ruby` `2.3.0` 版本是报错，原因和 [openssl](https://www.tuliren.dev/2020/01/02/fix-bundle-install/) 版本有关，在转换到 `openssl 1.0` 的同时，手动制定 `openssl` 的目录：

```sh
# brew switch openssl 1.0.2s
# export PATH="/usr/local/opt/openssl@1.0/bin:$PATH"
# export LDFLAGS="-L/usr/local/opt/openssl@1.0/lib ${LDFLAGS}"
# export CPPFLAGS="-I/usr/local/opt/openssl@1.0/include ${CPPFLAGS}"

RUBY_CONFIGURE_OPTS=--with-openssl-dir=/usr/local/Cellar/openssl/1.0.2s/ rbenv install 2.3.0
```

## `nokogiri`

`nokogiri` 依赖 `libxml`。修复方法是先安装 `libxml2`，再链接成 `libxml`：

```sh
brew install libxml2
sudo ln -s /usr/local/opt/libxml2/include/libxml2/libxml /usr/local/include/libxml
```
