th_s (THUNDERSCORES)
===

Hi! I'm a set of Sass files called `th_s` or `THUNDERSCORES` meant to be used within the [_s](http://underscores.me/ "So good!") WordPress starter theme, but you could easily repurpose it for pretty much whatever you want.

## Features
* Sass files are treated as components. This makes them more flexible and maintainable. This structure also happens to work well within a JS application by mirroring your JS components.
* Component-specific mixins, functions, and variable files are grouped within each components.
* There are a few global mixins and variables available, but they are limited for now. Most mixins should be paired with the component it effects.
* Thunderscores has some generated editor styles! Time-saver.
* Licensed under GPLv2 or later. :) Use it to make something cool.

Getting Started
---------------

The simplest way to get going is to download `th_s` from Github. Then head over to http://underscores.me to generate your `_s`-based theme. Follow these steps to combine them:

1. Move the contents of `th_s` into yout newly generated theme directory.
2. Then, update the comment block in `style.scss` to reflect your new theme.
3. You can process the files using your favorite compiler. Grunt is already set up and ready to go. I have included instructions for use in the next section.
4. Update or delete this README.

### Using Grunt
Make sure you have node.js and npm installed. Here's a handy installer for Windows, Mac, and Linux:
http://nodejs.org/download/

Once that has installed, you'll need to install the node dependencies. Run this from your theme folder:

`npm install`

Then run `grunt` to start watching and compiling your CSS files.


### Cool. Coolcoolcool.

Now you're ready to go! The next step is easy to say, but harder to do: make an awesome WordPress theme. :)

Good luck!
