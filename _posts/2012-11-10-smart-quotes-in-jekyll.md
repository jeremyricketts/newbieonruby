---
layout: post
title: Using Smart Quotes in Jekyll
category: nor
published: true
excerpt: Don't be &#34;cool.&#34; Be &#8220;cool.&#8221;
---

# {{ page.title }}
<p class="meta">November 10th, 2012</p>

## Be <strike>&#34;cool&#34;</strike> "cool"

While working on [this post](/installing-ruby-and-rails-on-mountain-lion/) I decided I wanted to go the distance and get smart quotes working.

Here's how. 

In your <code>\_config.yml</code> file, add it as an extension to the rdiscount markdown parser:

<pre>
<code data-language="ruby">
markdown: rdiscount
rdiscount:
    extensions: [smart]
</code>
</pre>

**Note:** You need to restart your Jekyll server to see the effects. (That took me 10 minutes to figure out.)