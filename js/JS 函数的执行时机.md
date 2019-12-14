### 为什么如下代码会打印 6 个 6
```
let i = 0
for(i = 0; i<6; i++){
  setTimeout(()=>{
    console.log(i)
  },0)
}
```


因为setTimeout是异步执行，当for循环6次后，才会执行setTimeout，i已经变成6了，循环打印的次数一共又有6次，所以这段代码会打印出6个6。


通过for 和 let 结合可以做到打印出 0 1 2 3 4 5
```
for(let i = 0; i < 6; ++i) {
	setTimeout(() => {
		console.log(i)
	}, 0)
}
```
在 ES6 之前做到打印 0 1 2 3 4 5

```
// 第一种方法
for(var i=0; i<6; ++i) {
	!function(j) {
		setTimeout(function(){
			console.log(j)
		}, 0)
	}(i)
}


// 第二种方法
for (var i=0; i<6; ++i) {
	setTimeout(function(i){
		console.log(i)
	}, 0, i)
}

```
总结：**函数什么时候开始调用，什么时候才开始查询参数的值**
