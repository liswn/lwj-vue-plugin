### 开始
```javascript
npm i lwj-vue-plugin -S
```
### main.js
```javascript
import lwjVuePlugin from 'lwj-vue-plugin'

Vue.use(lwjVuePlugin)
```
### 使用方法
##### 时间格式化
```javascript
filters： {{ new Date() | FormatDateTimeFilter('YYYY-MM-DD HH:mm:ss 星期E')}}

methods: $FormatDateTime(new Date(), 'YYYY-MM-DD HH:mm:ss 星期E')

运算结果：2019-01-04 13:00:00 星期五
```


##### 货币格式化
```javascript
filters： {{ 10000 | FormatCurrencyFilter({unit: '￥', position: 'suffix', places: 1})}}

methods: $FormatCurrency(10000, {unit: '￥', position: 'suffix', places: 1})

运算结果：10,000.0￥
```
##### SHA
```javascript
methods: $SHA('asdfghjkl')

运算结果：5fa339bbbb1eeaced3b52e54f44576aaf0d77d96
```
##### 字符串裁剪加省略号
```javascript
filters： {{ 'asdfghjkl' | TextClipFilter(3)}}

methods: $TextClip('asdfghjkl', 3)

运算结果：asd...
```


| 用途       |            filters               | methods                     | 参数 |
| :---------  |:------------------------------:| :-------------------------: |:-------:|
| 时间格式化  | {{date\| FormatDateTimeFilter(fmt)} |  $FormatDateTime(date, fmt) | date: 时间; fmt: 时间格式，如（"YYYY-MM-DD HH:mm:ss 星期E"） 默认（"YYYY-MM-DD HH:mm:ss"）|
| 货币格式化  | {amount\| FormatCurrencyFilter({unit, Places, position})}} |  $FormatCurrency(100, {unit, Places, position}) | amount: 金额；unit: 货币符号, 如"￥"，默认为空； places：保留小数位数，默认为2， position：位置，可选（prefix、suffix），默认：prefix|
| SHA  | - |  $SHA(string) | string: 用于加密的字符串|
| 字符串裁剪加省略号| string \| TextClipFilter(len) |  $TextClip(string, len) | string: 字符串; len:截取长度， type: Number 默认： 10|