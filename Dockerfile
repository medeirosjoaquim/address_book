FROM node:latest as builder
RUN apt-get update && apt-get install -y git

WORKDIR /app
COPY . .
RUN npx yarn
RUN npx yarn build:prod

FROM nginx:latest
RUN apt-get install bash
COPY nginx/default.conf /etc/nginx/conf.d/
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/build/* /usr/share/nginx/html/
CMD ["nginx", "-g", "daemon off;"]
