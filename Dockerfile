# Etapa 1: Construir mi app. Creo carpeta dist/
FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Etapa 2: Servir mi aplicacion usando la carpeta dist/ generada en el paso anterior
FROM nginx:alpine
COPY --from=build /app/dist/project /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf