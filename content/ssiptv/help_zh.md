---
title: "帮助"
date: 2020-09-10T18:50:35+08:00
draft: false
type: single
layout: i18n_redirect
---

# 帮助 

Simple Smart IPTV is one of the most popular Smart TV applications in CIS, South America and Europe. SS IPTV has become the first app of LG Smart World, which provided opportunity of IPTV viewing for its users. This app was highly rated by jury of LG Smart TV Apps Contest 2012 and got the prize in the main nomination - The Best App. 

SS IPTV today is dynamically evolving application, the center of entertainments inside your Smart TV. IPTV of hundreds of content operators, broadcast channels, videos from social networks, cloud services and video hostings – all of these are available for our users through the only one app's features!

At the same time we continuously work making SS IPTV better! We thoroughly research all the concealed possibilities of your TVs and embody them in new useful features, frequently without any lookalikes on the market!

## How to upload playlist


## About M3U

Playlist in M3U is ordinary text document which is encoded in UTF-8. It can be edited by application Notepad from accessories Windows. Any M3U file starts with #EXTM3U text identifier in the first line. The first line of the pair always starts form #EXTINF: text identifier. The second line of the pair containes only uri (link) of content.

Let's consider this example:

#EXTM3U

#EXTINF:0 tvg-name="BBC" audio-track="eng" tvg-logo="http://mylogos.domain/BBC.png", BBC World
http://server.name/stream/to/video2
#EXTINF:0 tvg-name="CNN" audio-track="rus", CNN International
http://server.name/stream/to/video2
#EXTINF:0, Arirang
http://server.name/stream/to/video3

As you can see from this example the M3U file represents the set of pairs of lines which describes the source of signal (link) and parameters. In this example there are 3 channels: BBC World, CNN International and Arirang.

The first line starts with #EXTINF: (duration) (attributes), (channel title). Required params are: duration and channel title. In case of live TV links the duaration has always to be 0 or -1.

Attributes are not requred params, this is the list of supported attributes:

tvg-shift - TV guide time shifting
tvg-name - TV guide identifier
tvg-logo -  channel's logo (url)
audio-track - Audio track definition of this channel, if it's supported by stream. Write language codes in ISO 639-2 standard, you may use several codes separated by comma (e.g.: "eng, rus, deu"). The first item in the list will be defined as default.
aspect-ratio - defines aspec ratio (may be not available for some TV models). Available values: 16:9, 3:2, 4:3, 1,85:1, 2,39:1
