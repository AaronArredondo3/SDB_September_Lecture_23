const router = require('express').Router(); // creating a variable --> import Router Engine from express. There will be a request and a response.

/*all the possible routes for the user */
router.get('/hello-world', (req,res) => {
    /* 
        - the pathway noted as a string
        - a CB function to handle the request and response
            - req,res
    */

    res.send("Hello World"); // Browsers automatically do a GET request by default
})

/* 
!   Challenge
    - Request Type: POST
    - Endpoint: 'greeting'
    -


*/

                        // Needs both the req and res!
router.post('/greeting', (req, res) => {
    // res.send('Good Afternoon!');
    res.status(200).send('Good Afternoon!')
})
module.exports = router;