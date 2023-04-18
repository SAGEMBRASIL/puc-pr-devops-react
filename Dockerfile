FROM ubuntu:latest
RUN mkdir /app
WORKDIR /app
RUN apt-get update
RUN apt-get install -y curl
RUN apt install npm -y
RUN npm install react-router-dom -y
CMD ["npm","start"]

