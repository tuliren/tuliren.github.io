---
title: 在 Mac 上使用 openssl 1.0
date: 2020-01-02 12:04:51
---

最近在使用 `node` 和 `rails` 时，接连碰到 `openssl` 版本问题：

> dyld: Library not loaded: /usr/local/opt/openssl/lib/libssl.1.0.0.dylib

原因是 `brew` 自动安装的往往是 `openssl` 最新版本 `1.1`，而很多库依赖的是 `1.0`。对应的解决方法是让 `brew` 使用老的版本：

```sh
brew switch openssl 1.0.2s
```

同时更新环境变量：

```sh
# change from openssl or openssl@1.1 to openssl@1.0
export PATH="/usr/local/opt/openssl@1.0/bin:$PATH"
export LDFLAGS="-L/usr/local/opt/openssl@1.0/lib ${LDFLAGS}"
export CPPFLAGS="-I/usr/local/opt/openssl@1.0/include ${CPPFLAGS}"
```
