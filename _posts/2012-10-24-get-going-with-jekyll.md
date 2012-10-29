---
layout: post
title: Get Going With Jekyll
category: nor
excerpt: Jekyll is what's used to drive this site. Here's what I learned.
---

# {{ page.title }}
<p class="meta">October 24th, 2012</p>

## My road to Jekyll.

I started my career in web development like a **lot** of people did in the mid 2000's&hellip; by tinkering with Wordpress. Since then, I think I've tried every PHP CMS under the sun. Drupal (shudder). Joomla (gag). I've had a look at small, nimble systems like [Perch](http://grabaperch.com) and even flat-file systems like [Kirby](http://getkirby.com/). Over time, [Expression Engine](http://expressionengine.com) became my go-to. A lot of backend devs might be shocked to see what a front-end developer could churn out using EE. The templating engine and the flexibility of "channels" make for a potentially powerful system. 

But there are still aspects of EE that drive me absolutely bonkers. For projects like this blog, EE is a massive overkill. Still, I consider EE to be "best in show" among the PHP CMS's. And that's a scary thought. I'll save that for another article though.

Time for something fun to use, easy to update, and *new*. It's also time to dip into a little Ruby!

## Hello Jekyll.

I discovered [Jekyll](http://jekyllrb.com/) through [an article](http://paulstamatiou.com/how-to-wordpress-to-jekyll) by Wordpress hacker turned Rails developer [Paul Stamatiou](http://paulstamatiou.com/). Paul had to worry about importing a long-running blog into Jekyll, so his setup is much more complex than my own. I'm starting fresh.

Here's why Jekyll appealed to me:

* No database.
* Writing content in my own [text editor](http://www.sublimetext.com/) using Markdown.
* Simple deployment (html files).
* Built with Ruby. Which I wanted to learn anyway.

### What Jekyll is not.

It's not a CMS in the traditional sense. There is no web-facing administration section. You'll be interacting with the content and the templates completely in your text editor or IDE of choice, running the Jekyll command, and then deploying the files it generates to a web server in whatever manner you see fit.

## Installing Jekyll on OSX.

It's late 2012 and I'm on a Mac. That means I'm running OSX 10.8 Mountain Lion and installing Jekyll 0.11.2.

Assuming you have ruby installed and updated, [installing Jekyll](https://github.com/mojombo/jekyll/wiki/install) is as easy as <code>sudo gem install jekyll</code>. I was able to follow the docs with no issue there.

## Starting a new Jekyll site.

Jekyll is a program that inspects a directory and then generates an entire website inside a sub-folder of that directory, named <code>\_site</code>. To get started, you'll make a new directory, change into that directory, and scaffold out a few folders and a config file that Jekyll will expect to find.

<pre>
<code data-language="shell">
mkdir mysite
cd mysite
mkdir _layouts _posts _site
touch _config.yml
touch index.html
</code>
</pre>
<p class="expandCode"><a href="#" title="Expand"><i class="icon-caret-left"></i> expand <i class="icon-caret-right"></i></a></p>

Now you have a folder, with three directories, a config file, and a starting <code>index.html</code> file. Open up <code>index.html</code> and put some sample html in there, just for kicks.

Now let's generate the site. In the terminal, make sure you're in the <code>mysite</code> directory and <code>sudo jekyll</code>. The output should read something like:

<pre>
<code data-language="shell">
WARNING: Could not read configuration. Using defaults (and options).
Invalid configuration - /Projects/Sandboxes/mysite/_config.yml
Building site: /Projects/Sandboxes/mysite -> /Projects/Sandboxes/mysite/_site
Successfully generated site: /Projects/Sandboxes/mysite -> /Projects/Sandboxes/mysite/_site
</code>
</pre>
<p class="expandCode"><a href="#" title="Expand"><i class="icon-caret-left"></i> expand <i class="icon-caret-right"></i></a></p>

What's with the WARNING message? Well, at this point <code>\_config.yml</code> is an empty file. So, Jekyll is warning you that it's going to generate the site using the default settings. Which is fine for now. Notice that last line. The site was successfully generated in the <code>\_site</code> directory. And sure enough, when you look inside the <code>\_site</code> directory, you'll see a brand spanking new <code>index.html</code>.

## Issues (there weren't many).

### Ignoring single files in a sub directory.

In my project's home directory, I have a <code>/css</code> folder. In there, sits my SASS file, <code>style.scss</code>, as well as the generated <code>style.css</code> file. Maybe it's bad practice to have .scss files within the same folder as the output .css files, I don't know. Anyway, when I run my Jekyll command, I see that Jekyll copies over both files into <code>\_site/css/</code>. 

If didn't like the idea of deploying a .scss file I could add the file to Jekyll's exclude list in my <code>\_config.yml</code> file. While I'm there, I'll also add Compass' <code>config.rb</code> file as well as my deployment script. Here's what I tried in my <code>\_config.yml</code>:

<pre>
<code data-language="ruby">
# In all of the examples below, the first two files were successfully excluded. However, my whole /css directory was also ignored.
exclude: deploy.sh, config.rb, css/style.scss
exclude: deploy.sh, config.rb, /css/style.scss
exclude: deploy.sh, config.rb, */style.scss
exclude: deploy.sh, config.rb, style.scss
exclude: deploy.sh, config.rb, *style.scss

# ...explicitly including it didn't work either:
exclude: deploy.sh, config.rb, css/style.scss
include: css
</code>
</pre>
<p class="expandCode"><a href="#" title="Expand"><i class="icon-caret-left"></i> expand <i class="icon-caret-right"></i></a></p>

So, I think there's some sort of regex bug going on or something. If the string "css" is anywhere in the exclude list, then the css folder gets excluded. Doh. Thankfully I don't care *that* much about deploying .scss files.

### Working with .htaccess

I wanted to remove the .html extension that Jekyll gives to all post URL's. Initially, I thought the best way to do this was by using an <code>.htaccess</code> file. Old dog. New tricks. You know the deal.

As it turns out, there are better ways of completing the task of removing the .htmls' in URL's. For one-off pages, I simply put the file in a folder, and renamed the file to index.html. As for the URL's of posts, Jekyll has a way of defining the URL structure you want. In my <code>\_config.yml</code>:

<pre>
<code data-language="ruby">
permalink: /:title/
</code>
</pre>
<p class="expandCode"><a href="#" title="Expand"><i class="icon-caret-left"></i> expand <i class="icon-caret-right"></i></a></p>

So, everything got worked out. However, I do think it's worth mentioning difficulty I had working with a <code>.htaccess</code> file. No matter what I tried, I couldn't get Jekyll to pull it into the <code>/\_site</code> folder. Even when I explicitly said to include it in <code>\_config.yml</code>:

<pre>
<code data-language="ruby">
include: .htaccess
</code>
</pre>
<p class="expandCode"><a href="#" title="Expand"><i class="icon-caret-left"></i> expand <i class="icon-caret-right"></i></a></p>

### Routing 404 errors to 404.html

This was a head scratcher. But no matter what I tried, I couldn't get 404 errors to display anything but Webrick's default 404 message.

My workaround: I went to my Apache2 server on my server and added <code>ErrorDocument 404 /404.html</code> directly to the vhost Apache configuration. So, at least this will work on the production server.

### Killing the Webrick server.

A couple times, I made the mistake of closing my Terminal window without stopping Jekyll's Webrick server. Apparently, the process will still run in the background and next time you go to boot up a Jekyll server, it will fail.

Killing a process in Linux is something I'm used to doing. However, it seems the PID for Webrick is constantly changing, so it's impossible to grep for it and then kill the PID. 

My workaround: Well, first of all, take the time to stop the Webrick server and avoid the issue altogether. But if you ever forget to do that and you have a wayward Webrick running, you can kill all ruby processes with a huge hammer: <code>killall ruby</code>.

## Development Environment.

Let's take a look at the tools I'm using in my development environment:

### SASS <span class="amp">&amp;</span> Compass

In my terminal, I cd into the project's root directory and fire off <code>compass watch .</code>. Easy peasy.

### Jekyll's development server

In my terminal, I cd into the project's root firectory and fire off <code>jekyll --server --auto</code>. A Webrick server kicks off on port 4000. The <code>--auto</code> parameter means that Jekyll will poll the directory and regenerate source templates and posts on the fly. It will even watch for other changes like .css files that have been freshly generated by Compass. Nice!

### Live Reload

[Live Reload](http://livereload.com/) is my new best friend. It's an app that sits in your OSX menu bar, polls a directory for changes, and then hooks into a browser extension (or snippet of javascript) that tells your page to refresh. That means you can keep your IDE or text editor of choice open on you main screen and every time you save a change, the browser you have open on the secondary monitor will refresh. No more alt-tab-command-R-alt-tab ninjutsu. 

**Note:** Live Reload is too fast for Jekyll. When it detects a change to a file, your browser will instantly refresh the page before Jekyll has had a chance to finish generating the site. Thankfully, Live Reload allows you to introduce a delay. I found 3 seconds sufficient (larger sites might need more time).

![Live Reload Config](/img/content/lreloadconfig.png "Live Reload Config")

## Deployment.

Jekyll generates an entire website and chucks all the files into the <code>\_site</code> directory. How you want to deploy that folder is entirely up to you. The slickest way to deploy the site, would probably be a GIT hook. If you're not using version control, you could just SFTP that bad boy right up to your server (old school baby).

I'm actually not that familiar with how GIT hooks work and I didn't want to start down the rabbit hole. So instead, I wrote a small deployment script which fired off some rsync:

<pre>
<code data-language="shell">
#!/bin/bash
rsync -avz --delete --exclude 'deploy.sh' /my-local-path/newbieonruby.com/newbieonruby/_site/ username@remoteserver.com:/my-remote-path/newbieonruby.com/
</code>
</pre>
<p class="expandCode"><a href="#" title="Expand"><i class="icon-caret-left"></i> expand <i class="icon-caret-right"></i></a></p>

(Obviously I redacted some info there, but you get the idea.) Since my machine connects to my web server via a signed key, I'm not asked for a password or anything. It just kicks off the rsync and about 3 seconds later, the site is deployed.

## Jekyll resources

[Jekyll usage documentation](https://github.com/mojombo/jekyll/wiki/usage): This is probably the most useful place to start. It shows the overall structure of Jekyll and how it operates. This was where I had my "aha!" moment with Jekyll.

[Jekyll config documentation](https://github.com/mojombo/jekyll/wiki/configuration): Bookmark this one.

[Sites built with Jekyll](https://github.com/mojombo/jekyll/wiki/Sites): I didn't discover this page until later in my site development. But wow. Very useful resource. Many of the people who have built sites using Jekyll have made the source code available to the public. It is really useful to dig in and see *how* people are doing things. There are some pretty ingenious developers out there. Learn from them

## Conclusion

Even though I am not a programmer (yet) I was able to get a Jekyll site up and running pretty quickly. The system feels convenient and elegant. I love that there's no DB server running. Think of all the Wordpress blogs out there running MySQL servers just to serve up a few pages and entries that will never really change. 

Jekyll makes a lot of sense to me, and it's a nice little to pinky-toe-dip into the world of Ruby. Because of this project I'm a little closer to understanding some core concepts in Ruby:

* Installing a gem
* Using config files
* Using SASS and Compass (SASS is a default in Rails)
* Using a few if/then statements in Ruby

You can browse [the source code for this site](https://github.com/jeremyricketts/newbieonruby).





