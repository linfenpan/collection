#!user/bin/python
# -*- coding: UTF-8 -*-

from BaseHTTPServer import HTTPServer, BaseHTTPRequestHandler;
import urllib;

class ServerHTTP(BaseHTTPRequestHandler):
  def do_GET(self):
    path = self.path;
    print path;

    query = urllib.splitquery(path)[1];
    print query;

    self.send_response(200);
    self.send_header('Content-Type', 'text/html');
    self.send_header('charset', 'utf8');
    self.end_headers();
    content = '''
      <!DOCTYPE HTML>
      <html>
      <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8">
        <title>Get page</title>
      </head>
      <body>
        中文内容
      </body>
      </html>
    ''';
    self.wfile.write(content);

  #def do_POST(self):

def start_server(port):
  http_server = HTTPServer(('', int(port)), ServerHTTP);
  http_server.serve_forever();

print 'listen on port 3012';
start_server(3012);