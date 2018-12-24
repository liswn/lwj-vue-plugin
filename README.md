###开始
```javascript
npm i lwj-vue-plugin -S
```
### main.js
```javascript
import lwjVuePlugin from 'lwj-vue-plugin'

Vue.use(lwjVuePlugin)
```
### 使用方法
| 用途       |            filters               | methods                     | 参数 |
| :---------  |:------------------------------:| :-------------------------: |:-------:|
| 时间格式化  | {{date\| FormatDateTimeFilter(fmt)} |  $FormatDateTime(date, fmt) | date: 时间; fmt: 时间格式，如（"YYYY-MM-DD HH:mm:ss 星期E"） 默认（"YYYY-MM-DD HH:mm:ss"）|
| 货币格式化  | {amount\| FormatCurrencyFilter(unit, position)}} |  $FormatCurrency(100, unit, position) | amount: 金额；unit: 货币符号, 如"￥"，默认为空；position：位置，可选（prefix、suffix），默认：prefix|
| SHA  | - |  $SHA(string) | string: 用于加密的字符串|
| 字符串裁剪加省略号| string \| TextClipFilter(len) |  $TextClip(string, len) | string: 字符串; len:截取长度， type: Number 默认： 10|