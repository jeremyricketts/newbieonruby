---
layout: post
title: Installing Ruby and Rails on OSX 10.8
category: general
published: true
excerpt: After 5 years of Rails, you'd think it would be easier.
---

# {{ page.title }}
<p class="meta">November 13th, 2012.</p>

## Installing it "right" on OSX

Ruby and RoR has been native to OSX for a while now. Many people just generate a Rails app and go along their merry way. However, I had heard (or read?) somewhere that it's best to leave the system's installation of Ruby alone and manage your own Ruby environment and sets of gems. There are a number of [stated advantages](http://net.tutsplus.com/tutorials/why-you-should-use-rvm/) to this and rails devs I knew said that RVM was the proper way to do it.

### RVM

I had already performed this task on Ubuntu while setting up my little LAMP web server that I use to host client work. I figured it would be just as easy on OSX. It was not.

Without going into a ton of painful detail, it seemed Apple had recently pushed an update to XCode command line tools that was giving RVM [trouble](http://stackoverflow.com/questions/11664835/mountain-lion-rvm-install-1-8-7-x11-error) (stackoverflow link). No matter what I tried, I just couldn't get it going.

I don't want to deal with this every time Apple updates XCode. After all, that's the whole reason for installing RVM.

<img src="/img/content/xcode-update.png">

### rbenv

A friend of mine said that he had better luck with [rbenv](https://github.com/sstephenson/rbenv). So, I gave it a try. I already had [homebrew](http://mxcl.github.com/homebrew/) installed so installing rbenv was as easy as:

<pre>
<code data-language="bash">
brew update
brew install rbenv
brew install ruby-build
</code>
</pre>

### rbenv, GCC, and Homebrew

Everything was fine until I tried installing an earlier version of Ruby (1.8.7). Like RVM, rbenv wanted to compile the interpreter using GCC. Doh!

rbenv pointed me towards [https://github.com/kennethreitz/osx-gcc-installer/downloads](https://github.com/kennethreitz/osx-gcc-installer/downloads) to download a standalone GCC installer. While researching this option, I came across [this page](http://hathaway.cc/2012/04/how-to-setup-mac-os-x-lion-for-ruby-and-rails-development/) where Akshay Gupta added [in the comments](http://hathaway.cc/2012/04/how-to-setup-mac-os-x-lion-for-ruby-and-rails-development/#comment-591903311):

> It is not generally safe to install this package over the top of Xcode. It was designed for people who want the compiler and its dependencies without having to install Xcode. If you've installed the Command Line Tools for Xcode, it will overwrite many of the files, and probably break all kinds of things.

This matched up with other comments I'd read. In general, if you've already installed Xcode's command line tooks, don't install the standalone GCC. Instead, Akshay suggested using Homebrew:

<pre>
<code data-language="bash">
brew update
brew tap homebrew/homebrew-dupes 
brew install apple-gcc42
</code>
</pre>

Blam! All done. And no fooling with symlinks or GCC or whatever or worrying about Xcode or OSX updates. (Although, I can't say I'm 100% sure what /homebrew-dupes is all about.)

### Further reading:

* [How to setup Mac OS X Lion for ruby and rails development](http://hathaway.cc/2012/04/how-to-setup-mac-os-x-lion-for-ruby-and-rails-development/)
* [My OS X Rails installation using Homebrew and rbenv, step by step](http://blog.wyeworks.com/2012/4/13/my-osx-rails-installation-using-homebrew-and-rbenv-step-by-step/)

## Final thoughts

This is insane. I feel like installing Rails should be much, much easier on OSX. Many newbies looking to try out Rails are running OSX. If they use the system's Ruby library, there's no telling when Apple will push an OSX update that messes with the system Ruby. Updating the system's Ruby also seems risky given that various programs om my mac use that library. 

### Make it like MAMP

Let's take a look at how PHP developers get up and running on OSX. Sure, OSX has PHP installed as well as Apache. But tampering with the system's PHP or dealing with a very hacked up version of Apache is a drag. Most people just install [MAMP](http://www.mamp.info/en/mamp/index.html):

> MAMP is installed in the typical Mac fashion: very easily. **MAMP will not compromise any existing Apache installation already running with your OS X.** You can install Apache, PHP and MySQL without starting a script or having to change any configuration files!

> Furthermore, if MAMP is no longer needed, it is sufficient to delete the MAMP folder and everything returns to its original status (i.e. MAMP does not modify any of the "normal" OS X). 

Download, drag it to your applications folder and you're done. OSX updates will never mess with your development libraries.

### Come on Yehuda. Save us!

[Yehuda Katz](http://yehudakatz.com/) has something like this in the works. It looks like it's being built now after [a successful kickstarter campaign](http://www.kickstarter.com/projects/1397300529/railsapp). Its name is [Tokaido](http://yehudakatz.com/2012/04/13/tokaido-my-hopes-and-dreams/).


