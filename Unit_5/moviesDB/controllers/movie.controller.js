const router = require ('express').Router();
const Movie = require('../models/Movie.model');
const { errorResponse } = require('../utils');
const validationSession = require('../middleware/validate-session')

// POST
router.post('/', validationSession, async(req,res) => {
    try {
        
        // console.log(req);

        //1. Pull data from client (body)
        const { 
            title, genre, rating, length, releaseYear
        } = req.body;

        //2. Create a new object using the model
        const movie = new Movie({
            title, genre, rating, length, releaseYear,
            owner_id: req.user._id
        });

        //3. Save the object to the DB
        const newMovie = await movie.save();

        //4. Response to client
        res.status(200).json({
            message: `${newMovie.title} added to collection`,
            newMovie
        })

    } catch (err) {
        errorResponse(res,err)
    }
});

//* GET All
/* 
!   Challenge
- No special endpoint necessary
- Response should consider
    - If found
    - not found
- Test the route within Postman

Docs: https://www.mongodb.com/docs/manual/reference/method/db.collection.find/

Hint: parameters within method are optional
*/

router.get('/', validationSession, async (req, res) =>{
    try {

        const allMovies = await Movie.find();
        
        // console.log(req.user);
        if(allMovies.length === 0) throw new error

        allMovies.length > 0?
        res.status(200).json({
            result: allMovies,
        }) :
        res.status(404).json({
            result: 'No movies found'
        })
        
    } catch (err) {
        errorResponse(res, err)
    }
});

//* GET One
router.get('/find-one/:id', validationSession, async (req, res) => {
    try {

        const{ id } = req.params;
        const getMovie = await Movie.findOne({_id: id, owner_id: req.user._id});

        if(!getMovie) throw new Error ('no movie found');

        res.status(200).json({
            results: getMovie
        })

        /* 
!   Challenge
        - By ID
        - Response should consider
            - If found
            - If no document found
        - Test the route within Postman
        
        Hint: Consider login within user.controller.js
        Docs: https://www.mongodb.com/docs/manual/reference/method/db.collection.findOne/
*/
    } catch (err) {
        errorResponse(res, err)
    }
});

//* Get All by Genre
router.get('/genre/:genre', validationSession, async (req, res) => {
    try {
        /* 
!   Challenge
        - No special endpoint necessary
        - Response should consider
            - If found
            - not found
        - Consider query casing within the endpoint.
            - hint: conditional w/ looping
        - Test the route within Postman
*/
    
        const { genre } = req.params;
        let buildWord;

        if(genre) {

            for(let i = 0; i < genre.length; i++) {

                if(i === 0) {
                    buildWord = genre[i].toUpperCase();
                } else if (genre[i-1] === "-") {
                    buildWord = genre[i].toLowerCase();
                } else {
                    buildWord += genre[i].toLowerCase();
                }
                // i ===0 ?
                // buildWord = genre[i].toUpperCase():
                // buildWord += genre[i].toLowerCase();
            }
        }

        const getMovies = await Movie.find({genre: buildWord, owner_id: req.user._id});

        getMovies.length > 0 ?
        res.status(200).json({
            result: getMovies
        }) :
        res.status(404).json({
            result: 'Try another genre'
        })


} catch (err) {
        errorResponse(res, err)
    }
});

//* Patch/Put One
router.patch('/:id', validationSession, async(req,res) => {
    try {

        //1. Pull value from parameter
        // const { id } = req.params;
        const filter = {
            _id: req.params.id,
            owner_id: req.user._id
        }

        //2. Pull data from the body
        const info = req.body;

        //3. Use method to locate a document based off the ID and pass in new information.
        //* .findOneAndUpdate(query, document, options)
        const returnOption = {new: true}; // option - returns the updated document.

        // const updated = await Movie.findOneAndUpdate({_id: id}, info, returnOption);
        const updated = await Movie.findOneAndUpdate(filter, info, returnOption);

        //4. Respond to client
        res.status(200).json({
            result: updated
        })

    } catch (err) {
        errorResponse(res,err)
    }
});

//* DELETE One
router.delete('/:id', validationSession, async(req,res) => {
    try {
        //1. Capture data (ID)
        const { id } = req.params;

        //2. use a delete method to locate and remove
        const deleteMovie = await Movie.deleteOne({_id: id, owner_id: req.user._id});
        // console.log(deleteMovie);

        //3. respond to client
        deleteMovie.deletedCount ?
            res.status(200).json({
                result: `Movie removed`
            }) :
            res.status(404).json({
                result: `No movie in collection`
            });

    } catch (err) {
        errorResponse(res,err)
    }
});

module.exports = router;