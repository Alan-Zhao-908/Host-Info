from node:8.16.0

add ./FeC/package.json /tmp/

run cd /tmp/ && npm install 

run npm install -g pm2

Add ./ /code/

run cp -r /tmp/node_modules /code/

expose 3005

workdir /code

entrypoint ["pm2-docker", "FeC/server/index.js"]

