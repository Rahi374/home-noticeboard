# Home Noticeboard

Controller program for a noticeboard at home

### Introduction

I have a Nexus 7 (2012) that's so slow that I can't use it, but it's rooted and has MultiROM and an Android L ROM with no Google Services and I basically decomissioned the tablet. My living (?) room also happens to have no clock, and our TV doesn't work so we can't get weather in the morning.

So I decided to put my tablet to good use and attached it to the wall and made this little noticeboard thing that has a clock and the current weather. I also made this while procrastinating. It does have a calendar as well, but it's really not that usable, but it's there anyway.

### Requirements

At the moment, I am using super-crude CSS to get the text to fit nicely on a Nexus 7 (2012) running Firefox Nightly. On any other screen it looks atrocious and is basically unusable. In the next version I'm going to switch to flexbox.

I also use wunderground's weather API. This noticeboard updates every 10 minutes and the free plan at wunderground allows 500 requests per day which I highly doubt I'll reach. Also it's set to Yokohama, Japan.

I also use fullcalendar from [[fullcalendar.io]], but that's just included in this project directory and probably won't ever update.

### Installation

Right now it's hosted at [[amanokami.net/kiosk/test-kiosk.html]]

### Future plans

- Switch to flexbox to fix the looks
- Customizable weather location (maybe)
- Train status (possibly)

### Contributors

Paul Elder

### License

The MIT License (MIT)

Copyright (c) 2016 Paul Elder

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
