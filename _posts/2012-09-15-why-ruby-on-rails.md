---
layout: post
title: Why Ruby on Rails?
category: general
published: true
excerpt: Why I chose to learn Ruby on Rails.
---

# {{ page.title }}
<p class="meta">September 15th, 2012</p>

## My personal road to Ruby

### Making my way down the stack

I'm a front-end developer and designer in my day job and freelance life. That term, "front-end developer" can mean different things depending on who you ask. We're an odd breed.

<div class="fedChart">
	<div>The typical tech stack:</div>
	<div class="g">Content Writer</div>
	<div class="gg">Design</div>
	<div class="gg">User Interface</div>
	<div class="ggg">HTML &amp; CSS</div>
	<div class="gg">Javascript (for layout interaction)</div>
	<div class="g">Application Logic (Ruby, Python, possibly js)</div>
	<div class="g">Database Admin</div>
	<div class="g">Systems Admin</div>
</div>

All FEDs write CSS and HTML. In a small shop, some FEDs are expected to do some UI and design work as well. In a traditional agency those are typically separate roles. 

The questionable area is javascript. With the advent of jQuery, a lot of FEDs started tinkering with javascript as it related to things like striping table rows, shuffling things around in the DOM, animating elements, etc. But that's where I and a lot of FEDs stopped. In my own career I've seen many a backend developer move further up the stack until they start creeping into User Interface role. If you're heading the other direction, like I am, it can be hard to start writing more and more complex javascript &mdash; the tasks start to look less like scripting and more like programming.

I know how to write functions, pass in variables, and crawl JSON. I can explain what an array is. But as I skimmed through Addy Osmani's [Learning JavaScript Design Patterns](http://addyosmani.com/resources/essentialjsdesignpatterns/book/) I quickly realized Vader was right. I am not a Jedi yet. 

### Rewind: The infamous DHH blog-in-15-minutes video

Many years ago, (I think around 2005) [DHH](http://david.heinemeierhansson.com/) made ([a video](http://www.youtube.com/watch?v=Gzj723LkRJY)) where he demonstrated how to create a simple blog application in 15 minutes, using something called "Ruby on Rails." *Keep in mind, it was a different time back then.* This demo struck a chord with me in a few ways:

* This guy is on a Mac? I thought only designers used those. Man, it would be nice to be able to use my Mac for programming too. (Back then, most "real" programmers I knew used Windows.)
* "Look at all the stuff you're **not** doing!" I remember that line even years later.
* He really did build a working prototype in 15 minutes.
* Ruby seemed readable and, as he put it, "beautiful."

### I should learn this stuff. Someday.

I promised myself I would check out Rails at some point. I bought DHH's "Agile Development with Rails" [second edition](http://pragprog.com/book/rails2/agile-web-development-with-rails). The book came. I put it off again. Then the [third edition](http://pragprog.com/book/rails3/agile-web-development-with-rails). I bought that one. I put it off again. Now the [fourth edition](http://pragprog.com/book/rails4/agile-web-development-with-rails) for Rails 3.2 will be released soon.

Now, years later, I've learned my lesson about buying books about a piece of software that is evolving as fast as Rails. They just can't keep up. But that's okay, because there are a lot of other options for learning Rails online. Some free, some pay-for.

## Reason #1: Evolution and improvement

Although I never found the time to dive in, I kept an eye on Rails. As the framework matured, there are some milestones that stood out to me. 

### Rails 2 and sexy migrations

I remember checking out watching [a RailsCasts screencast](http://railscasts.com/episodes/83-migrations-in-rails-2-0) on this and thinking WOW! Admittedly, 5 years ago I didn't know what I was looking at, but I remember watching this with a .NET developer friend. This is the feature that put Rails on his radar as well.

### Rails 3.1 changes

Rails 3.1 brought about some changes that felt pretty significant to me. There's a great rundown of the large ones [here](http://www.rubyinside.com/rails-3-1-adopts-coffeescript-jquery-sass-and-controversy-4669.html).

#### Rails &hearts; Merb

From the [Merb history page](http://rubyonrails.org/merb) on rubyonrails.org: 

> Merbists focused on among other things a small speedy core, being ORM/JavaScript agnostic, and having a rigorous API for extensions.

This, to me, seemed like a sign of a healthy project with good leadership. As frameworks grow and get battle tested, better patterns often emerge and it becomes necessary to stop and reconsider some of the core pieces. John Resig did the same thing when he announced that the selector engine in jQuery was being extracted from jQuery and moved into its own project: [Sizzle](http://sizzlejs.com/).

#### Hello jQuery

Originally, Rails required Prototype and Scriptaculous. This was back when the javascript framework wars were at their height and Prototype, jQuery, Mootools, and a few others were each gaining traction. jQuery eventually dominated the scene, and the fact that Rails imposed Prototype was a real issue for me. At work, we were stuck using Prototype during the development of [Toyota.com](http://toyota.com) and it was a real drag.

For better or for worse, I don't write vanilla javascript anymore. I write jQuery. In Rails 3.1 support for jQuery was moved out of a [gem](https://github.com/indirect/jquery-rails) and into Rails as the default.

#### SASS and CoffeeScript

Among front-end developers, SASS is a game changer. CSS feels stupid sometimes. To anyone writing CSS all day, SASS a blessed relief. When DHH announced that it was going to be native to Rails 3.1 (and indeed, the *default*) I thought it was an excellent move. At the time, the change was controversial but I personally think the Rails team got it right. It also made for the most epic GitHub comment thread&hellip; [ever](https://github.com/rails/rails/commit/9f09aeb8273177fc2d09ebdafcc76ee8eb56fe33).

## Reason #2: The community

### It's large

That's my impression at least. It seems that whenever I meet a freelance programmer or one that works at a web startup, there is a solid chance their preferred back end language is Ruby, PHP or perhaps Python.

### It's local

In most cities where there's any sort of web tech scene, you're likely to find a Ruby and/or Rails meetup. Here in San Diego, there is a growing web tech scene. I've attended the [SDRuby](http://www.sdruby.org/) group that meets at UC San Diego a few times now and it's a blast. Last month it was "Newbie Night" and there was a healthy showing of new programmers who hadn't even installed Rails yet. Now **that** is newbie-friendliness.

### It's fun

<img class="imgRight img33 imgBorderDark" src="/img/content/why.jpeg" alt="Why’s (Poignant) Guide to Ruby">

Events like [Rails Rumble](http://railsrumble.com/) show that there's a community of developers that are still excited about *building things*. Even if they use Rails in their day job, they still build things with it for fun. This isn't specific to the Rails crowd but I've personally seen this time and again. Rails developers *like* Rails in a way that other developers don't. 

The excitement about the next version of Rails is common among Rails devs I've talked to. I just haven't *personally* seen .NET developers, for example, get really excited about the next MVC framework Microsoft is working on. 

Oh, and then there's [Why’s (Poignant) Guide to Ruby](http://mislav.uniqpath.com/poignant-guide/book/chapter-1.html). How awesome is that?

## Reason #3: Ruby reads well

As a non-developer type, when I look at a massive block of C# or Python it takes me a while to figure out what's going on. I'm a little better at PHP only because I've has some experience with it. When I look at a chunk of Ruby, I feel like it "reads" better. This is what initially attracted me to jQuery. People have called jQuery "expressive" and I've heard the same word used to describe Ruby.

## Reason #4: Many resources for learning

At the local bookstore there's generally an entire row of books dedicated to Ruby and/or Rails. There are behemoth reference books for every language out there, but when it comes to PHP and Ruby in particular, there's also a large array of smaller topical books that really fill out the shelf. They don't feel like textbooks &mdash; they feel more "entrepreneurial" in nature. If that makes sense.

Then there are the online resources, which is what I'll be focusing on as I learn. Here are a few of the biggies:

* [Ruby on Rails tutorial by Michael Hartl](http://ruby.railstutorial.org/)
* [Ruby on Rails Guides at rubyonrails.org](http://guides.rubyonrails.org/getting_started.html) &mdash; I love that these are maintained to be compatible with the latest stable **and** edge Rails.
* [Code Academy Rails track](http://www.codecademy.com/tracks/ruby)
* [Code School](http://www.codeschool.com/) &mdash; That looks fun.
* [RailsCasts](http://railscasts.com/) &mdash; I've watched a few of these now and Ryan Bates is really great at explaining concepts.
* [TryRuby.org](http://tryruby.org/levels/1/challenges/0) &mdash; Another Why creation.
* [Ruby Source .com](http://rubysource.com/) &mdash; Full of tutorials.

## Reason #5: All the cool kids are doing it. <span class="soft">&hellip;still</span>

As of 2012, Rails is now 8 years old. When it started getting traction years ago, some more cynical bloggers (this was pre-Twitter&hellip; which itself was originally a Rails app) took issue with the fanboy-like craze that ensued that lasted for a year or two. After all, there are new programming languages and frameworks emerging all the time. This was surely another flash in the pan.

It's telling to me, that after all these years and after significant changes to the framework, it still feels like there is momentum behind Rails. Again, I speak as an outsider and as a font-end developer who's only dabbled in back-end programming. 

I recently posed this question to a group of web geeks at [a local meetup](http://sandiego.buildguild.org/): 

> "Do you think Rails is still relevant or do you think it's lost its way in some respects?" 

I'd say half of the crowd there were Ruby developers. Although they were clearly excited about some of the new server-side javascript frameworks like [node.js](http://nodejs.org/) and many felt like Rails can be overkill for smaller projects &mdash; they all agreed that Rails was still relevant and was improving.

## Reason #6: Jobs

About once a week I'll get an enthusiastic email or call from a tech recruiter with an "awesome opportunity" for a "Rails Rockstar&trade;." Okay, so most of these recruiters, God bless them, are totally clueless about technology. But the fact is, there is a lot of good Ruby and Rails work out there. Especially if what you're interested in is web technology.

In my sleepy beach town of Carlsbad California (30min north of San Diego) there's not a large tech scene. I know of only four .com's who, at some point, have tried to find local developer talent. One of them is the company I work for, [HireAHelper.com](http://hireahelper.com), which is a .NET operation. The **other three** are  Ruby shops.

## What about Python <span class="amp">&amp;</span> Django?

The only other community I've seen that comes close to what I've described above is the Python and [Django](https://www.djangoproject.com/) community. Django has also been around for years now. From what I gather, the software is mature and the momentum is still strong.

*Warning:* This is going to be highly subjective. 

Django's growth has seemed more deliberate and focused. As of this writing, the stable release if version 1.4.2. That, of course, is just a number. But when I look at the history of the Django project, I see steady, incremental changes with a focus on stability and documentation. Unlike Rails, where things have changed quite a bit between the major releases and you need to be sure that the tutorial or book you're reading was written for the *exact* point release of Ruby and Rails your running.

I suppose this comes down to what type of project you like. Since I'm learning Rails mostly for enjoyment, I don't mind that it's quicker paced and much more opinionated. I like my meatballs spicy.

The other intimidating thing about Python is that the Python developers I know (all of whom *love* Django) are real computer scientists. Books on Python and Django love to point out that NASA and Google love Python. In my own experience, Python devs are some of the [smartest programmers I've ever met](http://opani.com/) and they most certainly came from the bottom of the tech stack. I do know of one Django dev who came from a design background, but in my circle, he's the outlier. 

<img class="imgRight img33 imgBorderDark" src="/img/content/bumper-bowling.jpeg" alt="Bumper Bowling">

Does this mean that using Django **requires** that you be a proper hacker to use it? Of course not. I've just noted that the men and women I've met who are really into Django are a lot (a *lot*) smarter than me. And I've met some Rails developers who made me think "Well if they can do it, I'm sure I can figure it out." I'm not trying to work for NASA. **If Rails is perceived as bumper bowling for non-programmers, that's fine by me.**

## Conclusion

When really comes down to it, I think Ruby is strong on my radar and it has been for years now. Developers I meet, articles I read, projects I hear about, [useful scripts I discover on GitHub](https://github.com/Schultz/slicedns2linode) throughout my day&hellip; it all points to Ruby. SASS and Compass are written in Ruby. Some of my favorite startups and websites are built with Rails. There's no shortage of Ruby jobs. My local Ruby meetup is fun and interactive.

So, for myself, it's Ruby or bust!



