FROM node:18
WORKDIR /app
RUN npm install -g ts-node-dev
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "docker:dev"]
