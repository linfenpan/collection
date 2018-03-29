#!user/bin/python
# -*- coding: UTF-8 -*-

# 速度太慢，放弃

from wsgiref.simple_server import make_server

def application(environ, start_response):
  method = environ['REQUEST_METHOD'];
  path = environ['PATH_INFO'];
  start_response('200 OK', [('Content-Type', 'text/html')]);

  if method == 'GET' and path == '/':
    return 'hello world';


port = 3011
httpd = make_server('', port, application);
print 'listening port:', port;
httpd.serve_forever();