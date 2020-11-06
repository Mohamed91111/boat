const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const Router = require('./routes/routes');

const server = express();
const port = 1337;

server.use(cors());
server.use(express.json());

server.use(express.static(__dirname + '../frontend/build'));

const uri = 'mongodb://localhost:27017';
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Databse connection success');
});

server.use('/boat', Router);

server.listen(port);
console.log('server is listening on port ' + port);
