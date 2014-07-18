---
title: 'Ruby Kernel#Sleep'
author: David
layout: post
permalink: /2012/01/ruby-kernelsleep/
categories:
  - Uncategorized
tags:
  - dev
  - ruby
---
While reviewing the [answer on a stackoverflow question I posted](http://stackoverflow.com/a/10728091/1007711) I learned a very cool Ruby Kernel method: [sleep](http://www.ruby-doc.org/core-1.9.3/Kernel.html#method-i-sleep).

`Kernel#Sleep` does pretty much what the name implies; it pauses the interpreter for an indicated amount of seconds (or *forever* if no value is passed in). By itself this wasn't obviously useful to me. Why, I thought, would I want to make my code slower and delay results **and** prevent interaction? Well if you reviewed the code in the answer above you'd see this:



    Thread.new do
      loop do
        if WAYS[:updated] != (mtime= File.mtime(WAYS[:file]))
          WAYS[:all].replace File.readlines(WAYS[:file]).map(&:chomp)
          WAYS[:updated] = mtime
        end
        sleep 5 # seconds
      end
    end
    

The significant bit there is `Thread.new do`. That bit initiates a new Thread and runs the code within, while allowing the main thread to continue executing code. Now that the `sleep` is happening in a separate thread you can probably think of plenty of jobs you might want to delay or run on a schedule.

When I think about code I think about speed and optimization, but in this case it was delay and pacing that made my app work.

