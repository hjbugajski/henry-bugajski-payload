FROM node:18-alpine as build
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /app
COPY ./package.json ./tsconfig.json ./
ADD src /app/src
RUN npm pkg delete scripts.prepare
RUN npm install
ENV PATH /app/node_modules/.bin:$PATH
RUN npm run build

FROM node:18-alpine
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /app
COPY --from=build /app ./
ENV PATH /app/node_modules/.bin:$PATH
EXPOSE 3000
CMD ["npm", "run", "serve"]
