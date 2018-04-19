# dollar
js类型判断、方法重载、管理$变量工具。javascrip type check, function overload , manage $ exec

---
## 类型判断
```javascript
$.isNumber(1);
$.isString("1");
$.isElement(document.body);
//等等
```
---
## 函数重载
例如有o、a、b，3个函数

执行o函数，如果参数是(Number,Number)则执行a函数

如果参数是(String,Number)则执行b函数

调用方式如下
```javascript
$.overload([$.isNumber,$.isNumber],o,a);
$.overload([$.isString,$.isNumber],o,b);
o(1,1);//a
o("1",1);//b
```
