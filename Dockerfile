FROM node:8.9.4
WORKDIR /app
COPY package.json /app
# RUN apk --no-cache add g++ gcc libgcc libstdc++ linux-headers make python
# RUN npm install --quiet node-gyp -g
RUN npm install
RUN npm install npm-run-all eslint-watch
COPY . /app
CMD npm start
EXPOSE 2000