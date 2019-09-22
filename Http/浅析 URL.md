## HTTP简介： 

## URL包含那几部分？每部分分别有什么作用？
URL = 协议 + 域名(ip) + 端口 + 路径 + 查询参数 + 锚点

- 协议：协议是互联网基础协议，HTTP默认使用80端口，HTTPs默认使用443端口
- 域名：对ip的别称，IP（定义一台设备）
- 端口：不同的端口提供不同的服务
- 路径：指定请求的文件
- 查询参数：比如?name=zhangsan&age=18，可传送给服务器
- 锚点：比如"#1"即为锚点，不会传送给服务器

### DNS 的作用是什么，nslookup 命令怎么用
DNS（Domain Name System，域名系统），是把域名和IP地址联系在一起的服务，有了DNS服务器，你就不用输入IP地址来访问一个网站，可以通过输入网址访问。

nslookup 用于查看域名对应的ip  
nslookup命令的使用方法： nslookup baidu.com

### IP 的作用是什么，ping 命令怎么用
IP是一个独一无二的，作用是定位一台设备

ping 查看当前设备访问网址对应的ip
ping命令的使用方法：ping + 网址

## 域名是什么，分别哪几类域名

分为顶级域名、二级域名、三级域名

比如：www.baidu.com，其中.com顶级域名，baidu.com二级域名，www.baidu.com是三级域名，所以www.baidu.com和baidu.com是两个域名。




