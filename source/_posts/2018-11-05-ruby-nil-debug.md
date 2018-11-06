---
title: Ruby 中两个 `nil` 问题引起的 bug
date: 2018-11-05 21:58:29
tags: [Debug]
---

公司有一段 Ruby 代码偶尔会抛出以下错误：`no implicit conversion of nil into Hash`。一开始我一直以为，是对某个恰好是 `nil` 的 `Hash` 变量进行 element reference 操作（`#[]`）导致。但是找来找去没有这样的变量，而且对 `nil` 进行 element reference 的错误信息其实是这样的：`undefined method '[]' for nil:NilClass`。

Google 之后发现错误信息来自于 hash 的合并（`#merge`），当合并的对象是 `nil` 的时候，才会抛出这样的错误信息，因为 `merge` 试图把传入参数转换成 `Hash`。这一发现把错误代码的范围缩小到以下三行：

```ruby
var1 = collection1.reduce{|m1, m2| m1.merge(m2)}
var2 = collection2.reduce{|m1, m2| m1.merge(m2)}
vars = var1.merge(var2)
```

然后这里又涉及另一个 `nil` 相关的问题。实验发现，对空集合调用 `reduce` 方法，返回的不再是空集合，而是 `nil`：

```ruby
[].reduce{|sum, n| sum + n}
=> nil

{}.reduce{|sum, n| sum + n}
=> nil
```

至此，原因终于查清。以上代码中 `collection2` 有时候为空，导致 `var2` 等于 `nil`，这个 `nil` 作为 `merge` 方法的参数，引发了开头提到的异常。Tricky 的 bug 背后原因往往不止一个。此例也是如此。
