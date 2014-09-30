---
title: "Apple Insecurely Patches Bash Security Flaw"
author: David
layout: post
permalink: /2014/09/apple-insecurely-patches-bash-security-flaw/
categories:
  - Uncategorized
tags:
  - linked
---

Everyone is reporting that Apple has issued a patch for the bash bug known as _shellshock_.

[**arstechnica**](http://arstechnica.com/apple/2014/09/apple-patches-shellshock-bash-bug-in-os-x-10-9-10-8-and-10-7/)

> The OS X update wasn't yet available from Software Update on our Mavericks system when we checked, but in the meantime you can grab the Mavericks, Mountain Lion, and Lion versions of the patch manually from Apple's software downloads site.

[**appleinsider**](http://appleinsider.com/articles/14/09/29/apple-releases-bash-update-to-plug-shellshock-flaw)

>Mac owners running Mavericks can download the 3.4MB patch through Apple Support website, as can users operating Mountain Lion and Lion. For Mountain Lion, the fix comes in at 34.3MB, while the Lion download clocks in at 3.5MB. Alternatively, the patch is available through Software Update.

[**9TO5Mac**](http://9to5mac.com/2014/09/29/apple-releases-os-x-bash-update-1-0-addressing-shellshock-vulnerability/)

>For users on older versions of OS X, the Mavericks fix will not work. To secure those systems, there are separate downloads for Lion and Mountain Lion. The patch will likely be available through the built-in OS X Software Update mechanism soon.

Oddly, the patch (available only on Apple's website and not through the app store as of the time of this writing) is served over a standard http connection which means it's subject to a man in the middle attack. Fine? Maybe, but why gamble on security ever? Particularly when issuing _security patches._
