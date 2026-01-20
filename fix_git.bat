git rm --cached .env > rm_root_log.txt 2>&1
git rm --cached server/.env > rm_server_log.txt 2>&1
git commit -m "remove .env files" > commit_log.txt 2>&1
git push > push_log.txt 2>&1
