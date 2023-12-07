FROM node:current-alpine3.18 as BUILD_IMAGE
WORKDIR /app/control-tower/

COPY package.json .
RUN npm install
COPY . .
RUN npm run build


FROM node:current-alpine3.18 as PRODUCTION_IMAGE
WORKDIR /app/control-tower

COPY --from=BUILD_IMAGE /app/control-tower/dist/ /app/control-tower/dist/ 
COPY package.json .
COPY vite.config.ts .

RUN npm install --omit=dev
EXPOSE 8080
CMD ["npm", "run", "preview"]
