---
title: "Experiments in Podcasting: Briefs.fm"
author: David
layout: post
permalink: /2016/4/experiments-in-podcasting-briefsfm
---
As of this writing, I've been podcasting for over two years and running a podcast network for over a year. Even before I was making my own show, I was a big consumer of podcasts too.

Podcasting is a lot of work. And most of it happens before and after you get on the mic. Thanks to podcasting suddenly becoming cool (thanks, Serial!) lots of startups and apps and services have started to pop up trying to make podcasting easier in one way or another. Come to think of it the two-year anniversary episode of Flipping Tables [covered a bunch of them](http://sunriserobot.net/flippingtables/104/) including one I ended up experimenting with: [Briefs.fm](https://briefs.fm).

Briefs.fm's tagline is "A podcast you'll actually publish" and they say their differentiator is that

> "Episodes are limited to three minutes, published by email, and still sound amazing even when recorded on your phone."

Limiting shows to 3 minutes is very interesting and a lot of people have (I think correctly) referred to Briefs.fm as twitter for podcasting. Publishing by email is also a neat trick, and removes a lot of friction between talking into a mic and getting your content out there. But it's the last claim, "still sound amazing even when recorded on your phone", that piqued my interest the most.

Here is the equipment that goes into getting my voice from my mouth to your ears on [Flipping Tables](http://sunriserobot.net/flippingtables):

- [Neewer shock mount and pop filter](http://amzn.com/B00JZBC0NA) ~$10
- [Shure SM58 microphone](http://amzn.com/B000CZ0R42) ~$100
- [Rode PSA1 boom arm](http://amzn.com/B001D7UYBO) ~$100
- [Cloudlifter CL-1](http://amzn.com/B004MQSV04) ~$150
- [Focusrite 6i6 USB audio interface](http://amzn.com/B00CP4IIJY) ~$220
- Various cables (price varries based on length)

$580?! Do I really need all this stuff? The boom arm is definitely a luxury and only effects the sound by making good mic technique easier. And this doesn't include the Macbook Pro it's all plugged into, Logic Pro X that I use to mix, or the hosting service to get the episode swiftly delivered to you. Not to mention the time it takes to actually mix and eq the show. Briefs.fm is claiming it can get my show published using the phone I already carry anyway _and_ that it will sound amazing? Challenge accepted!

## The Experiment

I got in touch with Ben and launched "Human vs Robot Mixing" (discontinued since the experiment is completed) a show entirely devoted to recording with various devices under various conditions. I wanted to see how well [auphonic, the algorithm behind Briefs.fm](https://auphonic.com/), could possibly do with the sub-par audio recorded under sub-par conditions using sub-par microphones because _audio quality on a podcast matters a lot_.

### The Trials

Here are all six episodes, unprocessed first and auphonic'd second:

1. **Bose Quietcomfort Headphones Inline Mic**
  - Indoors. No ambient noise
  - Recorded with Quicktime on Mac
  - <audio src="/post-audio/briefs.fm/original/1-bose-inline-inside.mp4" controls preload type="audio/mpeg"></audio><audio src="/post-audio/briefs.fm/mixed/1-bose-inline-inside.mp3" controls preload type="audio/mpeg"></audio>
2. **Shure SM58 with Cloudlifter and Focusrite 6i6**
  - Indoors near window with loud road noise, tv playing in the background
  - Recorded with Quicktime on Mac
  - <audio src="/post-audio/briefs.fm/original/2-sm58-inside.mp4" controls preload type="audio/mpeg"></audio><audio src="/post-audio/briefs.fm/mixed/2-sm58-inside.mp3" controls preload type="audio/mpeg"></audio>
3. **Nexus 6p Built In**
  - Outdoors near very loud highway road noise
  - Recorded with Audio Recorder Android app
  - <audio src="/post-audio/briefs.fm/original/3-nexus6p-outside.wav" controls preload type="audio/mpeg"></audio><audio src="/post-audio/briefs.fm/mixed/3-nexus6p-outside.mp3" controls preload type="audio/mpeg"></audio>
4. **Nexus 6p Built In**
  - Outdoors near loud road noise, in high wind, mic close to my face
  - Recorded with Audio Recorder Android app
  - <audio src="/post-audio/briefs.fm/original/4-nexus6p-outside.wav" controls preload type="audio/mpeg"></audio><audio src="/post-audio/briefs.fm/mixed/4-nexus6p-outside.mp3" controls preload type="audio/mpeg"></audio>
5. **Zoom H4N Handy Recorder, Built In Stereo Mics**
  - Recorded to mono
  - Indoors, mostly quiet, squeaky room fan overhead
  - Recorded with onboard device software
  - <audio src="/post-audio/briefs.fm/original/5-zoom-h4n-inside.wav" controls preload type="audio/mpeg"></audio><audio src="/post-audio/briefs.fm/mixed/5-zoom-h4n-inside.mp3" controls preload type="audio/mpeg"></audio>
6. **iPad Air 2 Built-in Mic**
  - Indoors, quiet
  - Recorded with Voice Recorder Pro, settings tuned for voice
  - <audio src="/post-audio/briefs.fm/original/6-ipadair2-inside.mp4" controls preload type="audio/mpeg"></audio><audio src="/post-audio/briefs.fm/mixed/6-ipadair2-inside.mp3" controls preload type="audio/mpeg"></audio>

### The Results

\#1 Has an obvious reduction in "room noise" and sounds better overall.

\#2 doesn't sound really any different but the levels were brought up which is expected. It didn't need anything else and the algorithm correctly left it alone.

\#3 and #4 are similar except in #4 I am holding the phone much closer to my mouth so auphonic was able to boost my voice while still trying to supress road noise, though it can't do much about wind on a mic that has no wind screen. These tests were probably the most taxing on Auphonic.

\#5 is so quiet as to be unusable, but auphonic did a great job of bringing the levels up. Couldn't do much about de-essing though which is a strong indicator that mic technique still matters.

\#6 also had the levels brought up nicely without sending it into compression hell. A little bit of room noise still rings in the background (my voice tends to bounce of walls quite a lot) but a little room noise isn't necessarily a terrible thing.

Across the board Auphonic does a good job of bringing the voice level up, and brining the ambient noise level down. It also compressed the files in a way that seems pretty optimized for voice, as the processed files are substantially smaller. In the case of the Zoom it went from 18 MB to just 1.1 MB.

## The Conclusion

Briefs.fm is doing something different by limiting episodes to 3 minutes, and I'm excited to see where that format goes. Even though my show on Briefs is done (I do run [a podcast network](http://sunriserobot.net) after all) I'd recommend it to anyone who has ever thought about starting a podcast. Robot mixing isn't yet ready for a highly edited show, or a show with multiple hosts, but for a solo host limited to three minutes it's already good enough and getting better.

You still want to have decent mic technique, in a decent setting. If you're in a bare concrete basement with a washer and dryer running in the background and you hold your mobile at arm's length and shout at it, there isn't much anyone, human or robot, can do to make that sound great.
