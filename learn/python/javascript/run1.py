#!/user/bin/env python
# coding: utf-8

# 安装一下 PyExecJS
import execjs
import sys

reload(sys)
sys.setdefaultencoding('utf-8')

# 打开 js 文件，并读取内容
f = open("./run1.js", "r")
line = f.readline()
jsstr = ''
while line:
  jsstr = jsstr + line
  line = f.readline()

# 执行 js 内容，调用 run.js 中的 run 方法
ctx = execjs.compile(jsstr)
print ctx.call('run', 'da黑熊')
print 'hehe'
