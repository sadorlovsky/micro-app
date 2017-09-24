FROM node:8-alpine

WORKDIR /src
ADD . .
RUN npm install

EXPOSE 3000
CMD ["npm", "start"]
