FROM node:18.16.0-alpine3.17

#comment in prod
RUN npm install -g nodemon

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

RUN npm run build

EXPOSE 4000

#comment in prod
CMD ["npm", "run", "dev"]

#uncomment in prod
#CMD ["npm", "start"]