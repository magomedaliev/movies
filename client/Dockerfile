FROM node:lts-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build


FROM nginx:stable

WORKDIR /var/www/html

RUN rm -rf ./*
RUN rm -rf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/default.conf /etc/nginx/
COPY --from=builder /app/dist .

RUN mv /etc/nginx/default.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
