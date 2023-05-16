FROM node:18

WORKDIR /code

COPY package*.json .

RUN npm install

ARG PORT 

COPY . /code/.

EXPOSE ${PORT}

CMD ["npm", "run", "deploy"]

# docker build -t random-frontend .
# docker run --name random-frontend random-frontend