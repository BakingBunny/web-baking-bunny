# stage1 - build react app first 
FROM node:14 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
COPY yarn.lock /app/
RUN yarn --silent
COPY . /app
RUN yarn build

# stage 2 - build the final image and copy the react build files
FROM nginx:1.17.8-alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
