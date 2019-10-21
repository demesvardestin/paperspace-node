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
country is currently not working. Given that this client would run on a secure
connection, an external API url can only be reached with a jQuery ```$.get()``` request IF
the url is also over HTTPS. Otherwise, the request will be rejected (as is the case
with the link that was provided in the challenge instructions). I have not
yet found a way around it.

## Installation and Testing

First, you will need to clone this repository (make sure that you clone it at
the root of your environment, and not in another folder).

Then you will need to have MongoDB installed on your machine. You can do so by:

- visiting the [MongoDB installation page](https://docs.mongodb.com/manual/installation/ "MongoDB installation page")
- choosing the option for your particular system
- Run the necessary installation commands while inside the project folder

After verifying that Mongo is up and running, boot up the server with
```node server.js```.