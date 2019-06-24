---
title: 安装 mysql2
date: 2019-06-24 15:16:51
tags:
---

每次在新电脑上给 `rails` 项目安装 `mysql2`，总会遇到问题。因此在这里做一个汇总，供日后参考。

# `MySQL`
老的 `mysql2` 版本不兼容最新的 `MySQL`，因此要安装 `5.x` 版本：

```sh
brew install mysql@5.7
brew install mysql-connector-c # 未必需要
```

根据 `brew` 的提示，将以下变量添加到 `~/.bash_profile`：

```sh
export PATH="/usr/local/opt/mysql@5.7/bin:$PATH"
# For compilers to find mysql@5.7 you may need to set:
# export LDFLAGS="-L/usr/local/opt/mysql@5.7/lib"
# export CPPFLAGS="-I/usr/local/opt/mysql@5.7/include"
```

# `openssl`

```sh
brew install openssl
```

根据 `brew` 的提示，将以下变量添加到 `~/.bash_profile`：

```sh
export PATH="/usr/local/opt/openssl/bin:$PATH"
# For compilers to find openssl you may need to set:
# export LDFLAGS="-L/usr/local/opt/openssl/lib"
# export CPPFLAGS="-I/usr/local/opt/openssl/include"
```

`LDFLAGS` 和 `CPPFLAGS` 这两个环境变量之后要用，可以去除注释一起添加。

# `xcode-select`
每次升级系统都需要安装：

```sh
xcode-select --install
```

# `mysql2`

```sh
gem install mysql2
```

直接安装或者使用 `bundle install`，大概率会遇到以下问题：

```sh
linking shared-object mysql2/mysql2.bundle
ld: library not found for -lssl
clang: error: linker command failed with exit code 1 (use -v to see invocation)
make: *** [mysql2.bundle] Error 1
```

有时，只要安装了最新的 `xcode-select` 就能解决。如果依然不行，要使用之前 `openssl` 的编译变量：

```sh
# choose version accordingly
gem install mysql2 -v '0.5.2' -- --with-ldflags=LDFLAGS --with-cppflags=CPPFLAGS
```
