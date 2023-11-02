FROM node:21-alpine3.17

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm ci
COPY ./index.js ./

CMD ["node","./index.js"]