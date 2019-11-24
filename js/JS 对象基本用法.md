### 声明对象的两种语法
```
let obj1 = {name: 'zhangsan'}
let obj2 = new Object({name: 'zhangsan'});

var obj = { p: 1 };

delete obj.p // true
obj.p // undefined
```
### 如何删除对象的属性
delete命令用于删除对象的属性，删除成功后返回true

```
let obj = { p: 1 };

delete obj.p // true
obj.p // undefined
```
### 如何查看对象的属性
查看一个对象本身的所有属性，可以使用Object.keys方法。

```
let obj = {
  key1: 1,
  key2: 2
};

Object.keys(obj);
// ['key1', 'key2']
```
查看一个对象自身+共用属性 console.dir

查看一个对象属性
```
let obj = {
  key1: 1,
  key2: 2
};

obj.key1

obj['key2']
```

### 如何修改或增加对象的属性
直接赋值

```
let obj = {
  key1: 1,
};

obj['key2'] = 2

obj.key1 = 3
```
批量赋值
```
let obj = {
  key1: 1,
};

Object.assign(obj, {x: 111, y: 222})
```
无法通过自身修改共用属性只有通过修改原型对象

### 'name' in obj和obj.hasOwnProperty('name') 的区别

```
let obj = { name: 1 };
'name' in obj // true
'toString' in obj // true
```
对象obj本身并没有toString属性，但是in运算符会返回true，因为这个属性是继承的。这时，可以使用对象的hasOwnProperty方法判断一下，是否为对象自身的属性。
```
let obj = { name: 1 };
'name' in obj // true
obj.hasOwnProperty('name') // true
obj.hasOwnProperty('toString') // true
```

