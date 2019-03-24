---
title: 夏令时引发的 bug
date: 2019-03-15 16:34:11
tags: [Debug]
---

这几天在系统里看到了这样一个 `exception`：

```
Caused by: org.joda.time.IllegalInstantException: Cannot parse "2019-03-10 02:37:07": Illegal instant due to time zone offset transition (America/Los_Angeles)
```

背后的原因比较独特，是因为 3 月 10 号，太平洋时间（Pacific Standard Time，PST）转换为太平洋夏令时间（Pacific Daylight Time，PDT），凌晨 2 点直接变成 3 点。`02:37` 是一个其他时区的时间，但是由于没有时区信息，系统默认使用本地时区进行解析，而对于 PDT 来说 `02:37` 是一个不存在时间。

修复这个问题最好的解决办法是，在时间戳中加入时区信息。由于处理这个时间戳的系统，并不需要精确时间信息，所以本问题的实际解决办法是，直接使用 PST 进行解析。
