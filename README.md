# README #

### What is this repository for? ###

This is a restful API written to serve the web application. It is responsible for communicating with the Instagram API and deliver curated data to user's web browsers on demand.

### How do I get set up? ###

* install nvm
* clone the repository into a folder of your choice

### Docker ###

```
docker build -t ingr-api .
docker run -p 3000:3000 -d ingr-api
```

Access on http://<docker-host>:3000

### docker-compose ###

```
docker-machine up
```

### Run locally (for dev etc.) ###

```
nvm install stable
nvm use stable
npm install -g nodemon
npm install
npm start
```

Open http://localhost:3000
