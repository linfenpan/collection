#!/user/bin/env python
# coding: utf-8

# 成功版本，把 run3.js 里面的中文，统一转码，uglify - output.ascii_only = true 即可，另外 output.comments = false
# window 默认 cp936
# https://blog.csdn.net/weixin_35305721/article/details/79039308

import codecs
import sys
import io
# 安装一下 PyExecJS，需要保证电脑安装了 node.js 或者 PyV8 之类的
import execjs

reload(sys)
sys.setdefaultencoding('utf-8')

print sys.getdefaultencoding()
print sys.stdout.encoding
print execjs.get().name

# 打开 js 文件，并读取内容
with open("./run3.js", "r") as f:
  jsstr = f.read()
  f.close()

# print jsstr.encode("GB18030");
# print jsstr
# print jsstr.decode('utf-8').encode('GB2312')
content = jsstr#.encode('utf-8').decode(sys.stdout.encoding, 'ignore')

# # 执行 js 内容，调用 run.js 中的 run 方法（window下，无法编译通过。巨坑）
ctx = execjs.compile(content)
print ctx.call('run', '')
