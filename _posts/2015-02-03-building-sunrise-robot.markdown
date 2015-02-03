---
title: "Building Sunrise Robot"
author: David
layout: post
permalink: /2015/02/building-sunrise-robot
categories:
  - Uncategorized
tags:
  -
---
<img src="/post-images/sunriserobot_social.png" alt="H3LiOS, adorable robo-mascot for Sunrise Robot" style="max-width: 100%;">

This is H3LiOS, the mascot for [Sunrise Robot](http://sunriserobot.net).

What is Sunrise Robot? It's a podcast network of shows for technologists, gamers, artists and cultural enthusiasts. It was founded by me and my co-host on [Flipping Tables](http://sunriserobot.net/flippingtables), [Michael Edwards](http://pseudomichael.com). It's awesome and you should totally [go check it out](http://sunriserobot.net), listen, subscribe, and maybe even [support us](http://patreon.com/sunriserobot). But that's not what this post is about. This post is about the stack we used to build Sunrise Robot.

When we decided to build this thing we knew we had a lot of decisions to make. And the internet being the way it is meant there is no shortage of opinions on the Best Way&#8482; to do it. The three areas we had to primarily make choices in were:

1. CDN
1. web host
1. CMS

We immediately found that all of these areas overlap to a huge extent. We could have just done a one-click install of wordpress on literally _any_ hosting service, started uploading episodes to their "unlimited" storage, and called it a day. In return for the ease of setting that up we would be making a lot of trade offs. Let's look at each piece.

## CDN

A CDN (content delivery network) is just a place to store and serve files on the surface. For a podcast (or podcast network like Sunrise Robot) we also need industry-reliable data about each episode's performance.

When we launched Flipping Tables in the beginning of 2014 we just hosted in Dropbox. Free? Reliable(ish)? Easy to use? It's a great tool to use at first, but you give up a lot. It doesn't scale because it's not meant for content delivery at scale. It doesn't give you any control over the URLs of your files. It doesn't give you any info about file activity. These problems are true of any similar service as well like Google Drive/Copy/etc.

Then there is "unlimited" web hosting but aside from control over the URLs there isn't really much advantage over Dropbox.

### So we went with...

Libsyn. Industry-trusted analytics, works at scale, and fairly priced. It took me a minute to fully understand "monthly storage" but for a service like Libsyn is makes sense. Flipping Tables has been on Libsyn since mid-November and it's been working great. It's worth noting that Libsyn also provides webpage and feed services but you can use them for just file hosting/analytics which makes a lot more sense when you want control over your host and CMS.

## Web host

Web hosts are a dime a dozen. From cheap-o free services to shared hosting; from super high performance private servers to full stack solutions like wordpress.com or Squarespace.

Full stack solutions mean using the included CMS. We considered wordpress and Squarespace but they just weren't quite right for our needs. By the time we cut out the cruft and hacked in the features we needed it didn't make sense to use a plug-and-play solution that really wasn't.

Shared hosting has a bad reputation for the ridiculous number of asterisks on their unlimited plans. I think a big part of this bad reputation comes from the glut of wordpress sites in the last ten years. The sheer number of "how to speed up wordpress" posts, caching plugins, and the more recent popularization of static site builders is a testament to how difficult it is to run a full features CMS on shared hosting.

### So we went with...

It is _really_ affordable though and if you aren't using a database driven CMS it is actually a pretty decent option. So how are we managing content without a CMS?

## CMS

Content Management Systems are what we like to call a "solved problem" for the most part. For the majority of websites the right answer is either "Just use Squarespace" or "Just use Wordpress". There are others but seriously; a ridiculous amount of the internet is run on those two platforms.

For us and for Sunrise Robot neither of those really fit. We needed something fast and light weight. We were willing to do work to customize it but we agreed our needs were simple enough that building up would be easier than tearing down. I've been using [Jekyll](http://jekyllrb.com) as a static site generator for a couple years and was curious about [Middleman](http://middlemanapp.com). After some poking around the docs and setting up a few test sites I was sold.

### So we went with...

Middleman. It's powerful, flexible, and gave me a damn fine excuse to sharpen my skills.

## Announcing Sunrise Robot

It's been a long road getting here, and this is just the beginning. We've learned a lot, and can't wait to see what the future holds. [Sunrise robot officially launches _today_ so go check it out](http://sunriserobot.net)! And if you want to know more, check out Mike's post about [What 52 Weeks of Podcasting Will Do To You](http://pseudomichael.com/sunrise-robot/).
