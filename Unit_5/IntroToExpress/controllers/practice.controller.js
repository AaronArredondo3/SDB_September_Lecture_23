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

//* THIS is the building frame part! 
                    //! Needs both the req and res to work!
router.post('/greeting', (req, res) => {
    // res.send('Good Afternoon!');
    res.status(200).send('Good Afternoon!')
})

router.post('/json', (req,res) => {
    console.log(req.body);

    const {name} = req.body; // destructing very important 

    res.status(200).send(`Hello, ${name}`);
});

router.get('*', (req, res) => {
    /* 
        /"*": accounts for a "wild card" or anything that hasn't been defined.
        - Provide a clean response back to the user.
    */

    res.status(404).send(`<img src="https://http.cat/404" alt="status code 404"/>`)
})

module.exports = router;