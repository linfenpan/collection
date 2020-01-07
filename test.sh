true; exit_code=$?
if [ $exit_code = 0 ]; then git add -A . & git commit -m 'ci:article build' & git push origin; fi;