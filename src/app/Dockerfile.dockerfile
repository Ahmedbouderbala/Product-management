FROM node:8 as builder

COPY testapp /testapp
WORKDIR /minapp

RUN npm install
RUN $(npm bin)/ng builder

FROM nginx

COPY --from=builder /minapp/dist/* usr/share/nginx/html/

EXPOSE 80