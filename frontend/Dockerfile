FROM node:18
WORKDIR /app
COPY package*.json ./
# Limpia la caché de npm antes de instalar dependencias
RUN npm cache clean --force
RUN npm install --legacy-peer-deps
COPY . .
EXPOSE 5173
CMD ["npm", "run", "docker:dev"]
