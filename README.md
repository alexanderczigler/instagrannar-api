# README #

### What is this repository for? ###

This is a restful API written to serve the web application. It is responsible for communicating with the Instagram API and deliver curated data to user's web browsers on demand.

### How do I get set up? ###

* install node.js
* check out the repository into a folder of your choise

### Docker ###

* docker build -t ilix/centos-ingr-api .
* docker run -p 3000:3000 -d ilix/centos-ingr-api