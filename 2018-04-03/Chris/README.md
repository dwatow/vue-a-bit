# vue 的 component + API 練習

[練習結果](https://dwatow.github.io/vue-a-bit/2018-04-03/Chris/)

## API

放置在 lifecycle 的 `created` ，當時的 data 已初始化完畢，允許賦值。

## props

丟進來的 props 如同 data 般使用
可以用 `this.props` 取用。

> 不建議修改 props 的值
> 若真的要修改，建議使用
> ```
> data() {
>     return {
>         data1: this.props
>     }
> }
> ```

## $emit

這是一個可以委派事件給 component ，並且在事件的 callback 參數。

在 外層

:::warning
如同 jQuery
```javascript=
$('myTag').on('myEvent', eventCallback)
```
:::

```html
<myTag @myEvent="eventCallback" />
```

```javascript
mehtods: {
    callback (e) {
        //do something
    }
}
```

在 component

myMethod 的回傳值，就是 eventCallback 的參數。

```htmlmixed=
<tag @click="$emit('myEvent', myMethod())" />
```

```javascript=
event: myEvent,
methods: {
    myMethod () {
      return myEvent;
    }
}
```

## 修改 Dom 的 class

換 class 對於 jQuery 慣用的開發者來說，是很直覺的事。
但是對於 vue 來說就不是這麼簡單的事了。

這次除了參考「vue 10日」之外，再回去看 官網文件，發現之前沒注意過的寫法。

```htmlmixed=
<tag :class="condition ? class1 : class2" />
```

這樣一來就可以在 condition 的地方，放上邏輯囉~
