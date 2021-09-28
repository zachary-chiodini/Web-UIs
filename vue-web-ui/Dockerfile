# Build VUE project
FROM node:12.18.1-alpine
WORKDIR /app
COPY package*.json ./
RUN npm@7 install
COPY . .
RUN npm run build

# Build server
FROM nginx:1.19.0-alpine
COPY --from=0 /app/dist/ /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
