##HTTP简介： 
HTTP，全称为Hypertext Transfer Protocol，是一种应用层协议，适用于协作分布式和超媒体信息系统，也即今天的万维网。  
简单来说，http就是一个规定你怎么传数据格式，至于怎么传，那就交给tcp协议
## Server + Client + HTTP
![](https://github.com/FC0511/Learning/blob/master/Http/http.png)
- 浏览器负责发起请求
- 服务器在 80 端口接收请求
- 服务器负责返回内容（响应）
- 浏览器负责下载响应内容
###HTTP 请求包括哪些部分  
第一部分：动词 路径 协议/版本（我这个就是发了一个post请求，路径是/，协议版本是http1.1）  
动词有 GET( 指定的页面信息，并返回响应主体)
POST(向指定资源提交数据，请求服务器进行处理) 
PUT(向指定资源位置上传其最新内容,也就是全局更新) 
PATCH（区别于put,资源的部分更新） 
DELETE (请求服务器删除所请求URI)等
这里的路径包括「查询参数」，但不包括「锚点」,如果没有写路径，那么路径默认为 /

第二部分：key:value键值对，有host，user-agent。accept，content-length，content-type（标注了第 4 部分的格式)等

第三部分永远都是一个回车（\n）

第四部分：分是否有上传内容，如果有显示，如果没有就不显示。

![](https://github.com/FC0511/Learning/blob/master/Http/request.png)

###HTTP 响应包括哪些部分
第一部分：协议/版本号 状态码   
状态码1xx：消息，这一类型的状态码，代表请求已被接受，需要继续处理。这类响应是临时响应，只包含状态行和某些可选的响应头信息，并以空行结束 
2xx：成功，这一类型的状态码，代表请求已成功被服务器接收、理解、并接受（200，203，204）  
3xx:重定向，这类状态码代表需要客户端采取进一步的操作才能完成请求(比如我这个302)  
4xx：客户端错误，这类的状态码代表了客户端看起来可能发生了错误，妨碍了服务器的处理（401，404，405）  
5xx：服务器错误，表示服务器无法完成明显有效的请求（502，503）状态码主要是这几种状 
 
第二部分： Key: value（同请求的第二部分一样）

第三部分也是回车

第四部分是：要下载的内容

![](https://github.com/FC0511/Learning/blob/master/Http/response.png)

##如何使用 curl 命令
curl -X POST -d "1234567890" -s -v -H "Frank: xxx" -- "https://www.baidu.com"

语法：curl     -[参数]    --     [url]

常用参数：-d/--data    HTTP POST方式传送数据 

-s/--silent静音模式。不输出任何东西

-v/--verbose  

-H/--header 自定义头信息传递给服务器

-X/--request 指定什么命令



