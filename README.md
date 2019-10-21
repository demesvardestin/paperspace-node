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

The feature allowing retrievial of cities/states associated with a particular
country is currently not working. Given that the client would run on an HTTPS
page, an external API url can only be reached with a jQuery ```$.get()``` request IF
the url is also over HTTPS. Otherwise, the request will be rejected. I have not
yet found a way around it.

## Installation and Testing

MongoDB is used as the database, with Mongoose as the ODM. After cloning this
project, you will need to have MongoDB installed on your machine. You can do so
by visiting the [MongoDB installation page](https://docs.mongodb.com/manual/installation/ "MongoDB installation page")
and choosing the option for your particular system. After verifying that it's up
and running, you can boot up the server with ```node server.js```.