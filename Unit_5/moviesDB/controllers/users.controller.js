const router = require('express').Router();
const User = require('../models/user.model'); // we use it as a global variable just in case we need to use it anywhere else

router.post('/signup', async(req,res) =>{
    try {

        // Create a new object based off the Model Schema
        const user = new User({
            // firstName: req.body.first,
            firstName: req.body.first ? req.body.first : ' please update first name',
            // lastName: req.body.last,
            lastName: req.body.last ? req.body.last : 'please update last name',
            email: req.body.email,
            password: req.body.password
            //* All the info will be coming in from the client interface when they login
        });

        const newUser = await user.save(); //* a way to save the object.
        // Since we need to wait for a response we need to make it an async await.

        res.status(200).json({
            user: newUser,
            message: 'Success!! User Created!'
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
})











module.exports = router;