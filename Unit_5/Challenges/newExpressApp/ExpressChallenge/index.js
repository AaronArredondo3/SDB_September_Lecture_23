const express = require('express');
const app = express();
const PORT = 4000;

//*Imports
const {getTimestamp,} = require('./utils/middleware.js');
const controller = require('./controllers/routes.controllers.js');


//*Middleware
app.use(express.json());
app.use(getTimestamp);


app.use('/routes', controller);



app.listen(PORT, () =>{
    console.log(`Server is running on port: ${PORT}`);
})