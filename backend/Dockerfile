FROM node:18

WORKDIR /code

COPY package*.json .

RUN npm install

COPY index.js .

ARG PORT

EXPOSE ${PORT}

CMD ["npm", "run", "start"]

# docker build -t random .
# docker run --name random random