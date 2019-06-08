## 脚本
    $ ls -la
    drwxr-xr-x 1 10327 197121  0 5月  26 18:57 ./
    drwxr-xr-x 1 10327 197121  0 5月  26 18:52 ../
    -rw-r--r-- 1 10327 197121 68 5月  26 18:56 demo.sh
    
没有x是不允许执行的

    chmod +x demo.sh  
    
1. 将 ~/local 添加到 PATH 里
2. cd ~/local; pwd 得到一个路径。
3. 设置 PATH  
创建 ~/.bashrc：touch ~/.bashrc  
编辑 ~/.bashrc：start ~/.bashrc  
在编辑器里添加一行字： export PATH="local的绝对路径:$PATH"
4. 运行 source ~/.bashrc 使配置生效

#### PATH 的作用
每次在 Bash 里面输入一个命令时（比如 ls、cp、demo），Bash 都会去 PATH 列表里面寻找对应的文件，如果找到了就执行

