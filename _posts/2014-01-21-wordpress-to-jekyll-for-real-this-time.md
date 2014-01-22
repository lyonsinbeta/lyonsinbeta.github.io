---
title: "Wordpress To Jekyll, For Real This Time"
author: David
layout: post
permalink: /2014/01/wordpress-to-jekyll-for-real-this-time/
categories:
  - Uncategorized
tags:
  - tech, blogging
---
I've tried to use [Jekyll](http://jekyllrb.com/) (the static site generator built on ruby) before at least twice and all attempts ended in dismal failure. This time I made the leap and I'm not turning back. Lots of factors came into play but the one that really pushed me over the edge, I'm sorry to say, was _money_. 

<!--more-->

My hosting was coming up for renewal and the prospect of spending on it (even if it is cheap, all things considered) did not sit well. I used my hosting provider **exclusively** for my blog and there are any number of free alternatives.

- [Wordpress.com](http://wordpress.com) would have been free... if I was willing to have ads and nonsense on my site. I'm not against ads on the internet, but this definitely isn't an ideal situation.
- [Blogger](http://blogger.com) is... well... nah.
- [Ghost](http://ghost.org) is the sexy new kid on the block and it's easy to see why. Lots of nifty features: markdown writing, pretty analytics, and built on _node.js_. All the features an ironic mustache sporting twenty something wants in their blogging platform. Honestly if it was free or really cheap I probably would have gone with Ghost. The Ghost software _is_ free but you have to host it somewhere and shared hosting does not play friendly with node, apparently.
- etc, etc, etc

Then there's Jekyll. It's not exactly simple or friendly; you have to edit Liquid templates, build your site from the terminal, and be comfortable with github to really get the most out of it. 

But that's why it's **awesome**.

Writing posts in markdown, generating static HTML (which loads wicked fast), and _being forced to use the terminal and hack to add features_ is something I _want_ to do. Jekyll is just the right amount of work to be interesting, with the rewards (for someone who wants to work with ruby) that make it worth the hassle for what should be a simple task: blogging.

Because it generates static pages you can move your content from host to host at the speed of uploading small HTML files. That portability is a great feature in an era where vendor lock-in is on everyone's mind.

As for money, Jekyll is free to host if you use the amazing [Github Pages](http://pages.github.com/). Not much to say there, just awesome that this is available.

If you're interested in making the jump I used [this wordpress plugin](https://github.com/benbalter/wordpress-to-jekyll-exporter) to get my posts exported, and after my Jekyll blog was setup I added [the archive](https://gist.github.com/azsromej/1994881) which I found on [this blog](http://crhis.org/2012/07/14/archives.html).

