[![Code Climate](https://codeclimate.com/github/aishek/jquery-animateNumber.png)](https://codeclimate.com/github/aishek/jquery-animateNumber)

jquery-animateNumber
====================

[Demo](http://aishek.github.io/jquery-animateNumber/) | [v0.0.14 – Latest Release](https://github.com/aishek/jquery-animateNumber/releases/tag/v0.0.14)

[README на русском языке](https://github.com/aishek/jquery-animateNumber/blob/master/README.ru.md)

jQuery numbers animation plugin, adds 'number' property and step function to jQuery's animate function properties.

Requires jQuery 1.7.0 or higher (latest tested with 3.3.1).

## Quick example
```html
<p>Fun level <span id="fun-level" style="color: red; font-size: 0px;">0 %</span>.</p>
```

```js
// animateNumber accepts same arguments, as animate does
// it adds only 'number' and 'numberStep' params
$('#fun-level').animateNumber(
  {
    number: 100,
    color: 'green', // require jquery.color
    'font-size': '50px',

    // optional custom step function
    // using here to keep '%' sign after number
    numberStep: function(now, tween) {
      var floored_number = Math.floor(now),
          target = $(tween.elem);

      target.text(floored_number + ' %');
    }
  },
  {
    easing: 'swing',
    duration: 1800
  }
);
```

[All examples](http://aishek.github.io/jquery-animateNumber/)

## Alternative plugins for same task

* [jQuery Numerator](http://plugins.jquery.com/numerator/)

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

## Contributors

* [Alexandr Borisov](https://github.com/aishek)
* [Greg Thornton](https://github.com/xdissent)
* [Tomáš Opekar](https://github.com/topik)
