#!/user/bin/env python
# coding: utf-8
import sys
import io

reload(sys)
sys.setdefaultencoding('utf-8')

# https://github.com/PiotrDabkowski/Js2Py
# https://pscript.readthedocs.io/en/latest/gettingstarted.html
# https://github.com/brython-dev/brython/issues/937
import js2py


# context = js2py.EvalJs({'window': None})
# context.execute('console.log(typeof window)')

# 修正这个判定 -- var isBrowser = typeof window !== 'undefined';
# from js2py import pyjs
# pyjs.JS_BUILTINS['ttt'] = None
# js2py.eval_js('console.log(typeof window.document)')


# step1 文件使用前，需要先转换 ---> 遇到正则，容易gg的
js2py.translate_file('run2.js', 'run2src.py')
from run2src import run2src
print run2src.run()

# step2 引入文件，并且执行
# from run2_api import run2_api
# print run2_api

# 可行例子
# js2py.translate_file('example.js', 'example.py') # this translates and saves equivalent Py file
# from example import example  # yes, it is: import lib_name from lib_name
# print(example.someVariable)
# print(example.someVariable.a)
# print(example.someVariable['a'])

# JSDOM = js2py.require('jsdom')
# print JSDOM
# context = js2py.EvalJs({ "document": {} })
# js2py.run_file('run2.js', context)