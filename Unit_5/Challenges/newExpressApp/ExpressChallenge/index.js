const express = require('express');
const app = express();
const port = 4000;

//*Imports
// const middleware = require('./middleware');
// const data = require('./data.json');
// const { logTime } = require('./utils');
// const bookController = require('./book.controller');

//*Middleware
// app.use(logTime);
app.use(express.urlencoded()); // parses the body from our browser so it can display the response.
app.use(express.json()); // Provides us access to use JSON within our routes
app.use(express.static(`${__dirname}/public`)); 

//*CONTROLLER
// app.use(logTime);
// app.use(middleware);
// app.use(bookController)


// app.listen(PORT, () =>{
//     console.log(`Server is running on port: ${PORT}`);
//     // Provides us feedback that it is running.
// })