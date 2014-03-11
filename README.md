th_s (THUNDERSCORES)
===

Hi. I'm a sass-heavy starter theme called `th_s` or `thunderscores`. I'm a fork of [_s](http://underscores.me/ "So good!"). I'm a theme meant for hacking so don't use me as a Parent Theme. Instead try turning me into the next, most awesome, WordPress theme out there. That's what I'm here for.

My ultra-minimal CSS might make me look like theme tartare but that means less stuff to get in your way when you're designing your awesome theme. Here are some of the other more interesting things you'll find here:

* A just right amount of lean, well-commented, modern, HTML5 templates.
* A helpful 404 template.
* A sample custom header implementation in `inc/custom-header.php` that can be activated by uncommenting one line in functions.php and adding the code snippet found in the comments of `inc/custom-header.php` to your `header.php` template.
* Custom template tags in `inc/template-tags.php` that keep your templates clean and neat and prevent code duplication.
* Some small tweaks in `inc/extras.php` that can improve your theming experience.
* A script at `js/navigation.js` that makes your menu a toggled dropdown on small screens (like your phone), ready for CSS artistry. It's enqueued in `functions.php`.
* 2 sample CSS layouts in `layouts` for a sidebar on either side of your content.
* Smartly organized starter CSS in `style.css` that will help you to quickly get your design off the ground.
* Licensed under GPLv2 or later. :) Use it to make something cool.

Getting Started
---------------

If you want to set things up manually, download `th_s` from github. The first thing you want to do is copy the `th_s` directory and change the name to something else - Like, say, `megatherium` - then you'll need to do a five-step find and replace on the name in all the templates.

1. Search for `'th_s'` (inside single quotations) to capture the text domain.
2. Search for `th_s_` to capture all the function names.
3. Search for `Text Domain: th_s` in style.css.
4. Search for <code>&nbsp;th_s</code> (with a space before it) to capture DocBlocks.
5. Search for `th_s-` to capture prefixed handles.

OR

* Search for: `'th_s'` and replace with: `'megatherium'`
* Search for: `th_s_` and replace with: `megatherium_`
* Search for: `Text Domain: th_s` and replace with: `Text Domain: megatherium` in style.css.
* Search for: <code>&nbsp;th_s</code> and replace with: <code>&nbsp;Megatherium</code>
* Search for: `th_s-` and replace with: `megatherium-`

Then, update the stylesheet header in style.css and the links in footer.php with your own information. Next, update or delete this readme.

Now you're ready to go! The next step is easy to say, but harder to do: make an awesome WordPress theme. :)

Good luck!
