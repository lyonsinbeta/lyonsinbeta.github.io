---
title: "Experiments in Product: Canvas Module Filters"
layout: post
---

_**Disclaimer:** This is a personal project, and is not endorsed by Instructure or Canvas LMS. [Custom JavaScript must be maintained by the institution](https://community.canvaslms.com/docs/DOC-10862-4214724282)._

Most (great) product features come from a deep understanding of customers' problems. It's tempting to build every "good" or "obvious" feature someone can describe passionately but that leads to thoughtless bloat that breaks the UX. And most things people describe as "obvious" actually have 10,000 questions between the comment and a well researched/tested feature.

Sometimes the stars align and a conversation with an insightful person includes an offhanded "wouldn't it be neat" comment that's small enough to quickly prototype and test. And those are just the circumstances that led to this experiment: Module Filters.

## Behold! Content filters!
<video width="100%" controls src="/post-video/module_filters.mp4" type="video/mp4" autoplay loop>
<p>Your browser doesn't support HTML5 video. 😭</p>
</video>

The comment, which was part of a _much_ larger conversation on organization and navigation, was
>"Wouldn't it be neat if you could filter by content type right on the Modules page in Canvas?"

and I agreed. Because Canvas supports custom JavaScript I was able to quickly mockup a functioning prototype for all-important testing and validation.

This project was a good candidate for me to experiment with because it's
1. small in scope
1. technically possible
1. UI/UX not immediately obvious

### Small in Scope

Small changes a person/team can wrap their hands all the way around are ideal for quality, and ensuring it actually addresses the problem. Feature creep is very real though, and I had to repeatedly slap my own hand and say "No! That's not part of what is being tested here!" Keeping things in scope is tough in the face of the endless waterfall of "wouldn't it be neat if it _also..._"

### Technically Possible

What I mean by technically possible is that 1. the idea is _literally_ possible at all and 2. within my ability to develop. JavaScript is great for uses exactly like this and Canvas allows for this kind of thing, and while the scope of the idea is small, if I knew nothing about HTML/CSS/JavaScript and had to learn all of that first the overall project would have been a somewhat larger commitment.

### UI/UX

This is where the bulk of the work (and my excitement for the idea) went. "Filters" in apps don't have a universal UI: sometimes they're checkboxes, or a dropdown menu, or toggles, or happen automatically while typing, etc. None of those is right or wrong, and it depends on the situation which direction one might lean. My first version actually uses unstyled checkboxes with labels (which looked awful) just to make sure my code worked. Thinking about the UI/UX also helped me with feature creep in that the UI for a filter like content works well as checkboxes because a user might want any number of filter combinations on/off, but they wouldn't work well to toggle a single binary state like "has due date", for example. One might even want different types of filter simultaneously which requires a lot of additional considerations.

Ultimately I settled on an on/off toggle using the corresponding content icon instead of a checkbox with a label to support any combination of content types to be shown/hidden, and to avoid adding text to the app UI. Keeping the filters to just content type made the UI more approachable and let me focus on the UX of how it might be to actually use this feature.

## Try It and Tell Me What You Think

I put the [code on Github](https://github.com/lyonsinbeta/canvas-module-filters) with an MIT license. If you play with it I'd love to hear your thoughts either [on the repo](https://github.com/lyonsinbeta/canvas-module-filters/issues) or on [twitter](https://twitter.com/lyonsinbeta).
