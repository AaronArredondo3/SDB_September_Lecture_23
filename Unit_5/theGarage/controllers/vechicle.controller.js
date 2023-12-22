const router = require('express').Router();
// import Model/Schema
const { Vehicle } = require('../models')
const { error, success, incomplete } = require('../helpers');
// import helper functions

//! CREATE
router.post('/', async(req,res) => {
    try {
        
        const { make, model, year, color } = req.body; // Pull data from client
        if(!make) throw new Error('Please input a vehicle make.');

        const vehicle = await new Vehicle({ // create a new object
            make, model, year, color
        }).save(); // save it to the database

        vehicle ?
        success(res, vehicle) :
        incomplete(res);


    } catch (err) {
        error(res,err);
    }
});

//! GET ALL
router.get('/', async (req,res) => {
    try {
        
        const vehicles = await Vehicle.find();

        vehicles ?
            success(res,vehicles) :
            incomplete(res);

    } catch (err) {
        error(res,err);
    }
});





module.exports = router;