FROM node:13 AS builder

WORKDIR /build

COPY package*.json .

RUN npm install
RUN npm run prod

FROM nginx:alpine

ENV PORT 8080
ENV HOST 0.0.0.0

COPY --from=builder /build/dist /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.template
COPY docker-entrypoint.sh /docker-entrypoint.sh

ENTRYPOINT [ "/docker-entrypoint.sh" ]
CMD [ "nginx", "-g", "daemon off;" ]