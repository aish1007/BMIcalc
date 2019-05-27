FROM node:8.11.4
RUN npm install sails -g
ENV NODE_ENV development
WORKDIR G:/Masters/summer/cloud/Assignment1/backendapp/app
COPY ["package.json","package-lock.json*","npm-shrinkwrap.json*","./"]
RUN npm install
COPY . .
EXPOSE 1337
CMD sails lift
