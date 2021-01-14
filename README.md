# wsui-justify-list
> wsui module for negative margin list.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm i @jswork/wsui-justify-list
```

## usage
```scss
// use sass
@import '~@jswork/wsui-justify-list/dist/index.scss';
// use css
@import '~@jswork/wsui-justify-list/dist/style.css';


// in-width: 盒子的宽度
// in-height: 盒子的高度
// in-item-width: 每个子级元素的宽度
// in-item-height: 每个子级元素的高度
// in-column-count: 每行有多少列
// in-row-count: 共有多少行, -1: 或者不传，表示不关心行数
// in-selector: 默认选择器

@include wsui-justify-list(
  $in-width,
  $in-height,
  $in-item-width,
  $in-item-height,
  $in-column-count,
  $in-row-count: -1,
  $in-selector: ">.is-item"
);
```

## license
Code released under [the MIT license](https://github.com/afeiship/wsui-justify-list/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/wsui-justify-list
[version-url]: https://npmjs.org/package/@jswork/wsui-justify-list

[license-image]: https://img.shields.io/npm/l/@jswork/wsui-justify-list
[license-url]: https://github.com/afeiship/wsui-justify-list/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/wsui-justify-list
[size-url]: https://github.com/afeiship/wsui-justify-list/blob/master/dist/wsui-justify-list.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/wsui-justify-list
[download-url]: https://www.npmjs.com/package/@jswork/wsui-justify-list

