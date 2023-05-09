FROM node:18.16.0-alpine3.17

WORKDIR /app

COPY package*.json .

#comment in prod
RUN npm i

#uncomment in prod
#RUN npm ci

COPY . .

#uncomment in prod
#RUN npm run build

EXPOSE 3000

#comment in prod
CMD ["npm", "run", "dev"]

#uncomment in prod
#CMD ["npm", "run", "preview"]