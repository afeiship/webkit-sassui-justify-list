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
// deps - `strip-unit`
@import "~@jswork/wsui-functions/dist/index.scss";

// use scss
@import '~@jswork/wsui-justify-list/dist/index.scss';
// use css
@import '~@jswork/wsui-justify-list/dist/style.css';

// in-width: 盒子的宽度
// in-item-width: 每个子级元素的宽度
// in-columns: 每行有多少列
// in-selector: 默认选择器 (默认: > .is-item)
// in-slibling: 末行兄弟选择器 (默认: .is-item)

.list1 {
  margin-bottom: 20px;
  @include wsui-justify-list(1000px, 220px, 4) {
    background: #ddd;
  }
}
```

```html
<div class="list1">
  <div class="is-item">item1</div>
  <div class="is-item">item2</div>
  <div class="is-item">item3</div>
  <div class="is-item">item4</div>
  <div class="is-item">item5</div>
  <div class="is-item">item6</div>
  <div class="is-item">item7</div>
</div>
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

