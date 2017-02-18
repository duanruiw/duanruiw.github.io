---
layout: post
title:  "GitHub+jekyll  博客搭建"
date:   2017-02-18 15:59:41 +0800
categories: jekyll Github
tags: jekyll Github
---
 利用Github提供的Pages功能，把本地搭建的Jekyll站点部署上去，实现一个自由定制的个人静态博客
> 主要参考：[Jekyll和Github搭建个人静态博客](http://pwnny.cn/original/2016/06/26/MakeBlog.html#NativeBuild03)

#####  本地搭建Jekyll (以下都基于Windows环境)

1. Ruby

Ruby是一种纯粹的面向对象编程语言。安装Jekyll需要电脑上安装Ruby，以下是安装步骤：

- Window 系统下，我们可以使用 RailsInstaller 来安装 Ruby 环境，下载地址为：[点击进入下载页面](http://railsinstaller.org/en)
- 下载 RailsInstaller 之后，双击 railsinstaller-3.2.0 文件，启动 Ruby 安装向导
- 点击 Next，继续向导，记得勾选 Add Ruby executables to your PATH，直到 Ruby 安装程序完成 Ruby 安装为止
- 安装后，通过在命令行中输入 **$ ruby -v** 命令来确保一切工作正常
- 如果一切工作正常，将会输出所安装的 Ruby 解释器的版本。如果您安装了其他版本，则会显示其他不同的版本

安装成功示例：
``` 
$ ruby -v
ruby 2.2.6p396 (2016-11-15 revision 56800) [i386-mingw32]   
```
2. 使用gem安装Jekyll

用RubyInstaller安装Ruby之后都附带有Gems，如有需要可以从[这里单独下载RubyGems](https://rubygems.org/pages/download)。  
* 使用命令`$ gem install bundler`安装Bundler
* 之后使用`$ gem install github-pages`安装github pages 
* 安装jekyll `$ gem install jekyll`

#### 使用Jekyll创建博客站点
自己在本地新建一个文件夹作为博客项目根目录
```
$ mkdir myblog 
$ jekyll new myblog 
# 生成博客项目myblog
$ cd myblog
# 一定要进入创建的对应blog目录，否则服务无法开启
$ jekyll serve
# 启动一个地址为http://localhost:4000/的服务器
```
[http://localhost:4000/](http://localhost:4000/)