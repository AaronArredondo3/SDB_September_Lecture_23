require('dotenv').config(); // connects our .env file to our project.
const express = require ('express');
const app = express();
const mongoose = require('mongoose'); // used from node_modules this is the dependencies
// const PORT = 4000;
const PORT = process.env.PORT; // points to our env file and puts the value of PORT from that variable into this PORT variable.
const MONGO = process.env.MONGODB; // connection variable from .env
const userController = require('./controllers/users.controller')

mongoose.connect(`${MONGO}/movies`)
// connection middleware. Est. route and defining our Collection that we are targeting.
//* Doesn't display until there is a document within a collection.

const db = mongoose.connection; // this is an event listener to check if its connected.
db.once("open", () => console.log(`Connected: ${MONGO}/movies`));
app.use(express.json());

app.use('/user', userController);

app.listen(PORT, () => console.log(`Movies: ${PORT}`));