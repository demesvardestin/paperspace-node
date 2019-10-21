## Paperspace Node Challenge
![paperspace-node-challenge](https://github.com/demesvardestin/paperspace-node/raw/master/public/assets/paperspace_node_challenge.png "paperspace-node-challenge")

This is a small, minimal client that interacts with a set of RESTful of API endpoints
built with NodeJS to perform CRUD actions on an ```Address``` model.

## Stack

- NodeJS
- ExpressJS
- Pug
- Bootstrap

## Purpose

The idea is to be able to create, retrieve, update, and delete records from the
database. Record attributes are

- name
- street
- city
- state
- country


## Issues

The provided REST API service to retrieve state information for a given country, does not
seem to work. I've tried various means of polling the endpoint, including
[Request](https://github.com/request/request "Request"), [Axios](https://github.com/axios/axios "Axios"),
and the built-in [http module](https://nodejs.org/api/http.html "http module"),
but nothing seems to work. It appears the endpoint itself is not working.
I've looked elsewhere for an alternative, but was unable to find
a free service. So for the time being, this app does not validate a country's state
(although I did provide a filter-as-you-type functionality for listing available countries).

## Installation and client testing

Assuming you already have npm and node installed, you will firstly need to clone
this repository (make sure that you clone it at the root of your environment,
and not in another folder).

NOTE: If you don't have npm or node intalled, you can use
the following links:

- [npm installation page](https://www.npmjs.com/get-npm "npm installation page")
- [nodejs installation page](https://nodejs.org/en/download/ "nodejs installation page")

Ideally, you should have Node v10 and up (the version I used on my machine to
build the project).

Once you've completed all installations, and have cloned the project, you will
need to have MongoDB installed on your machine. You can do so by:

- visiting the [MongoDB installation page](https://docs.mongodb.com/manual/installation/ "MongoDB installation page")
- choosing the option for your particular system
- Run the necessary installation commands while inside the project folder

After verifying that Mongo is up and running, install all dependencies with
```npm install```, then boot up the server with ```node server.js```.

Note: if your machine uses a port other than 3000 (such as 8080), you should
update the ```server.js``` file to reflect that difference.

## Unit tests

I provided a couple of unit tests on the controller actions (using chai & mocha).
To run those tests:
- Install [Mocha](https://mochajs.org/#installation "Mocha") with ```npm install --save-dev mocha```
- Install [Chai](https://www.chaijs.com/guide/installation/ "Chai") with ```npm install chai```

Then run ```npm run test``