---
layout: post
title: Including .htaccess in Jekyll
category: nor
published: true
excerpt: Getting Jekyll to include an .htaccess file - a workaround.
---

# {{ page.title }}
<p class="meta">November, 08 2012</p>

## The issue.

Jekyll doesn't like files that begin with a dot. It's understandable. Most of these files (like <code>.gitignore</code> and <code>.sass-cache</code> files) are not ones you typically want to deploy to a production server. 

However, if you're pushing up to an Apache server it's likely you'll want to use a <code>.htaccess</code> file at some point. When I was initially [setting up this website](/get-going-with-jekyll/), this really threw me for a loop. I need that file! Apparently I'm [not the only one](https://github.com/mojombo/jekyll/issues/search?q=.htaccess).

## The workaround.

Finally I came across [this issue](https://github.com/mojombo/jekyll/issues/363) discussion in GitHub. [Juev](https://github.com/mojombo/jekyll/issues/363#issuecomment-1763812) to the rescue.

Just create a file and tell Jekyll to change the name of the generated file. So simple!

In my project root, I have a file called <code>htaccess</code> (**no** preceding dot) that contains:

<pre>
<code data-language="yml">
---
layout: none
permalink: .htaccess
---
RewriteEngine On
RewriteCond %{http_host} ^www.newbieonruby.com [nc]
RewriteRule ^(.*)$ http://newbieonruby.com/$1 [r=301,nc]
</code>
</pre>
<p class="expandCode"><a href="#" title="Expand"><i class="icon-caret-left"></i> expand <i class="icon-caret-right"></i></a></p>

All set! Now when i run my Jekyll command, a nice pretty <code>.htaccess</code> file will show up.




