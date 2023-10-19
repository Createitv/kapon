FROM node:16-alpine

RUN npm install pm2 -g --registry=https://registry.npm.taobao.org

WORKDIR /app

COPY ./dist dist
RUN ls -al -R
EXPOSE 3000

CMD ["pm2-runtime","start", ".output/server/index.mjs","-i","4"]
#CMD ["node",".output/server/index.mjs"]
