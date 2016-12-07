[![Code Climate](https://codeclimate.com/github/aishek/jquery-animateNumber.png)](https://codeclimate.com/github/aishek/jquery-animateNumber)

jquery-animateNumber
====================

[Примеры](http://aishek.github.io/jquery-animateNumber/) | [v0.0.13 – последняя версия](https://github.com/aishek/jquery-animateNumber/releases/tag/v0.0.13)

[README in english](https://github.com/aishek/jquery-animateNumber)

Этот плагин для jQuery позволяет анимировать числа, добавляя к функции $.animate свойства number и numberStep.

Работает с jQuery 1.7.0 или более новой версией (тестировался на версиях 2.0.3, 2.0.2, 2.0.1, 2.0.0, 1.10.2, 1.10.1, 1.10.0, 1.9.1, 1.9.0, 1.8.3, 1.8.2, 1.8.1, 1.8.0, 1.7.0).

## Пример
```html
<p>Уровень качества <span id="fun-level" style="color: red; font-size: 0px;">0 %</span>.</p>
```

```js
// функция $.animateNumber принимает такие же аргументы,
// как и $.animate, дополнительно можно использовать
// параметры 'number' и 'numberStep'
$('#fun-level').animateNumber(
  {
    number: 100,
    color: 'green', // требует jquery.color
    'font-size': '50px',

    easing: 'easeInQuad', // требует jquery.easing

    // опциональный аргумент: функция шага анимации числа
    // здесь используется, чтобы добавить '%' в конце числа
    numberStep: function(now, tween) {
      var floored_number = Math.floor(now),
          target = $(tween.elem);

      target.text(floored_number + ' %');
    }
  },
  1800
);
```

[Все примеры](http://aishek.github.io/jquery-animateNumber/)

## Другие плагины для анимации чисел

* [jQuery Numerator](http://plugins.jquery.com/numerator/)

## Разработка

1. `npm install grunt-cli -g`
2. `npm install`
3. `https://github.com/gmarty/grunt-closure-compiler`
4. `grunt watch`

## Note on Patches / Pull Requests

* Сделайте форк.
* Внесите изменения.
* Сделайте пулл-реквест. Ваши изменения в отдельной ветке принесут плюс в карму :)

## Лицензия

jquery-animateNumber является бесплатным ПО, подробности в файле LICENSE.

## Авторы

* [Александр Борисов](https://github.com/aishek)
* [Greg Thornton](https://github.com/xdissent)
* [Tomáš Opekar](https://github.com/topik)

## Минутка рекламы

Я руковожу [Цифрономикой](http://cifronomika.ru/). Мы занимаемся разработкой на Ruby on Rails. Пишите!
