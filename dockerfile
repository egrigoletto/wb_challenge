FROM node:12
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm install nodemon -g --quiet
COPY . .
EXPOSE 8080
CMD [ "node", "src/server.js" ]
