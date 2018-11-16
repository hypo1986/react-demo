FROM hub-dev.xxxxx.com/team-front/mobile-insurance:v0.1.0

WORKDIR /app

COPY package.json webpack.config.js ./
COPY src/ /app/src/

RUN npm install --registry=https://registry.npm.taobao.org/


RUN npm run build

EXPOSE 9000
CMD [ "npm", "start" ]
