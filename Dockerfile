FROM node:22-alpine3.19 as build
WORKDIR /app

# Instalar
COPY ./package*.json .
RUN npm install

# build
COPY . .
RUN npm run build:docker 

# Enviar o build para o Nginx
FROM nginx:1.27-alpine as DEPLOY
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist/front-angular/browser /usr/share/nginx/html
EXPOSE 82
CMD ["nginx", "-g", "daemon off;"]