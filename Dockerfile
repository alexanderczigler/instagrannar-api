FROM node

WORKDIR /app
ADD ./package.json /app/package.json

RUN npm install

ADD ./ingr.config.json /app/ingr.config.json
ADD ./index.js /app/index.js
ADD ./lib /app/lib

CMD node index.js
