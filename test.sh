# 测试自动提交命令，true 那里可以改为任意需要检测异常的命令
true; exit_code=$?
if [ $exit_code = 0 ]; then git add -A . && git commit -m 'ci:article build' && git push origin; fi;