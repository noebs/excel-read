FROM node:12-alpine 

COPY . ./app

WORKDIR /app

RUN npm install

VOLUME [ "./upload" ]

CMD ["npm", "run", "start"]