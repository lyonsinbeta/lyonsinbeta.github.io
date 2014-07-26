---
title: Logging is the Great Mystery of Our Time
author: David
layout: post
permalink: /2014/07/logging-is-the-great-mystery-of-our-time
categories:
  - Uncategorized
tags:
---

Whenever I can't find something on Google easily it typically comes down to one of two reasons:

1. I am phrasing my question _so wrong_ that it's not turning up useful results
1. No one has ever asked this question before

The first is frustrating but if you're paying attention to the results you do get and exercise some cleverness you can muddle your way to whatever you're really after.

The second is the real problem. _No one has ever asked this question before?_ **On Google?** ...ever?! What is more likely is what I've been experiencing while trying to learn about logging (in the context of application development). It's been a perfect storm of:

- common words with multiple meanings and contexts
- complicated issue not discussed in a consistent way
- specific issue within an otherwise active community that is largely ignored or taken for granted

My issue is that I don't really know exactly what I'm asking for. This old [Stackoverflow question/answer](http://stackoverflow.com/questions/14463512/how-do-i-access-sinatras-logger-outside-the-request-scope/14464229#14464229) got me part of the way there (and that person very graciously updated their answer when I asked a followup question!) The phrase "best practices" lead me to a [useful Reddit discussion](http://www.reddit.com/r/ruby/comments/18b02h/best_practices_for_making_loggerconfigetc/), which helped me refine my Google fu and brought me to a pretty excellent, but also quite old, [Ruby Rouge's podcast](http://rubyrogues.com/025-rr-logging-i-do-not-think-it-means-what-you-think-it-means/). All of this was over many hours of trial and error which in Internet time is eons.

![Spongebob meme: Logging](/post-images/logging.jpg)

Why is logging such a difficult thing to research? For one thing it's not a sexy topic in the development community. Another issue is that although there are about 1000 different ways to handle application logging, it's not a _hotly debated_ topic so you don't find tons of forum posts with flame wars raging. Also the type of logging you do varies drastically depending on the size and complexity of your application. Small, simple applications use the [Ruby standard library Logger](http://www.ruby-doc.org/stdlib-1.9.3/libdoc/logger/rdoc/Logger.html) and that's pretty much that. Big applications built on frameworks like Rails have logging built in so it's sort of taken for granted. There are tons of logging gems that are "better" but it's difficult to discern _why_ they are better when you can't find any definitive steps on "how to log."

Now that I have a (tenuous) handle on what logging is all about, particularly for small webservice/utilities like I'm creating, I've settled on this method:

- create a "MyLogger" class with a logger object from the standard lib
- create a class method that writes to the logger object
- write to the logger object via the class method from wherever you need to within your application

This solutions gives you one, consistently formatted log, that you can write to from anywhere in your application, and doesn't necessitate instantiating tons of logger objects or including logger methods in all your classes. This solution would probably blow up on a complicated or high load application, but as [Time Pease](http://pea53.com/) said in the Ruby Rouges podcast above: "do what works until it doesn't."
