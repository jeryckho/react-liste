FROM node:8

EXPOSE 3000

# Home directory for Node-CRUD
RUN mkdir -p /usr/src/node-crud
WORKDIR /usr/src/node-crud

COPY app/ /usr/src/node-crud
RUN npm install

CMD ["npm", "start"]