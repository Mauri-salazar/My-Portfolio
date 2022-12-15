FROM node:16.15

WORKDIR /usr/src/app

COPY package*.json ./

COPY public/ ./public
COPY src/ ./src

RUN npm install

RUN npm install -g serve

COPY build/ ./build
EXPOSE 3000

# CMD ["npm", "run", "start"]
CMD ["serve", "-s", "build", "-l", "3000"]