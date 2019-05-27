FROM node:8.11.4
ENV NODE_ENV development
WORKDIR G:/Masters/summer/cloud/Assignment1/client/server
COPY ["package.json","package-lock.json*","npm-shrinkwrap.json*","./"]
RUN npm install
COPY . .
EXPOSE 8080
CMD npm start
