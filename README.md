jquery-animateNumber
====================

jQuery numbers animation plugin.

[Demo](http://aishek.github.io/jquery-animateNumber/) | [Latest Release v0.0.1](https://github.com/aishek/jquery-animateNumber/releases/tag/v0.0.1)

## Quick examples
```html
<p>Fun level <span id="fun-level" style="color: #0f0;">0 %</span>.</p>
```

```js
$('#fun-level').animateNumber(
  {
    to: 100,

    easing: 'easeInQuad',
    duration: 5000,

    step: function(now, fx) {
      var value = Math.floor(now),
          percent_value = value + ' %';

      $(fx.elem).text(percent_value);
    }
  }
);
```

```html
<p>Distance from Sun to Earth is <span id="distance" data-animate-number-from="0" data-animate-number-to="149 600 000"></span> km.</p>
```

```js
$('#distance').animateNumber();
```

## Development

1. `npm install grunt-cli -g`
2. `npm install`
3. `https://github.com/gmarty/grunt-closure-compiler`
4. `grunt watch`

## Note on Patches / Pull Requests

* Fork the project.
* Make your feature addition or bug fix.
* Send me a pull request. Bonus points for topic branches.

## License

It is free software, and may be redistributed under the terms specified in the LICENSE file.

## Credits

Contributors:

* [Alexandr Borisov](https://github.com/aishek)