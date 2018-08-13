# webkit-sassui-justify-list
> webkit sass ui module for negative margin list.

## usage:
+ config sass:
```sass
.justify-list-demo{
  //You know the line count:
  @include webkit-sassui-justify-list(500px,220px,120px,100px,4,2);
}

.justify-list-demo2{
  //You don't care the line count:
  @include webkit-sassui-justify-list(500px,320px,120px,100px,3);
  >.item{
    margin-bottom: 10px;
  }
}
```

+ html:
```html
<h2>You know the line count:</h2>
<div class="justify-list-demo wrapper">
    <div class="item">item1</div>
    <div class="item">item2</div>
    <div class="item">item3</div>
    <div class="item">item4</div>
    <div class="item">item5</div>
    <div class="item">item6</div>
    <div class="item">item7</div>
    <div class="item">item8</div>
</div>

<h2>You don't care the line count:</h2>
<div class="justify-list-demo2 wrapper">
    <div class="item">item1</div>
    <div class="item">item2</div>
    <div class="item">item3</div>
    <div class="item">item4</div>
    <div class="item">item5</div>
    <div class="item">item6</div>
    <div class="item">item7</div>
    <div class="item">item8</div>
</div>
```

## resources:
+ https://github.com/afeiship/generator-webkit-sassui
