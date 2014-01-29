---
title: "Google Authorship"
author: David
layout: post
permalink: /2014/01/Google-Authorship/
categories:
  - Uncategorized
tags:
  -
---
Did you know you can get your face to show up in Google search results for content you've authored? It's true! [Google actually anounced this feature quite a while ago](http://googlewebmastercentral.blogspot.com/2011/06/authorship-markup-and-web-search.html), but I've been dragging my feet. Turns out it's incredibly easy to setup.

<!--more-->

Now (actually within a few days, according to Google) when one of my blog posts comes up in Google search results, it'll be accompanied by my G+ profile photo. Neat.

It's simple to setup too, from [Google's webmaster tools site](https://support.google.com/webmasters/answer/1408986?hl=en):

> - Create a link to your Google+ profile from your webpage, like this:
>  `<a href="[profile_url]?rel=author">Google</a>`
> Replace `[profile_url]` with the your Google+ profile URL, like this:
>
> `<a href="https://plus.google.com/109412257237874861202?rel=author">Google</a>`
> Your link must contain the `?rel=author` parameter. If it's missing, Google won't be able to associate your content with your Google+ profile.
> 
> - Add a reciprocal link back from your profile to the site(s) you just updated.
>  - Edit the Contributor To section.
>  - In the dialog that appears, click Add custom link, and then enter the website URL.
>  - If you want, click the drop-down list to specify who can see the link.
>  - Click Save.
> To see what author data Google can extract from your page, use the structured data testing tool. 

Side note about the profile URL: custom URLs only partially work. Even though `google.com/+DavidLyons` will take you to my profile, the authorship feature only works with `plus.google.com/+DavidLyons`.

You can check if it's setup correctly, and see what it will look like, using the [Structured Data Tool](http://www.google.com/webmasters/tools/richsnippets)
![Google Authorship Preview]({{ site.baseurl }}assets/post-images/google-authorship.png)

Just what the internet needs, more of my face.
