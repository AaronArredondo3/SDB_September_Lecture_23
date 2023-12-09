const router = require("express").Router();
const db = require(`../data.json`);
const { errorHandling } = require('../utils/helpers');

// const errorHandling = (res, err) => {
//     return res.status(500).json({
//         error: err.message
//     })
// }

//* Getting ALL DATA
router.get('/', (req,res) => {
    try {
        // console.log(req);
        res.status(200).json({
            results: db,
            timestamp: req.timeStamp
        })

    } catch(err) {
        // res.status(500).json({
        //     error: err.message
        // })
        errorHandling(res, err);
    }
});

//*Get by ID
router.get('/find-id/:id',(req,res) =>{
    try {
        let { id }= req.params;
        let results = db.filter(i => i.id == id);
        console.log(results);

        if(results.length !==0){
            res.status(200).json({
                results: results[0],
                timestamp: req.timeStamp
            })
        } else{
            throw new Error('No book!')
        }


    } catch (err) {
        // res.status(500).json({
        //     error: err.message
        // })
        errorHandling(res, err);
    }
})

//*Query by Title
router.get('/query/', (req,res) =>{
    try {
        const {title} = req.query;

        let results = db.filter(i => i.title.toLowerCase() == title.toLocaleLowerCase())
        if(results.length > 0) {
            res.status(200).json({
                // results:{title: `${title}`},
                results: results[0],
                timestamp: req.timeStamp
            })
        } else {
            throw new Error('Title not found')
        }

    } catch (err) {
        // res.status(500).json({
        //     error: err.message
        // })
        errorHandling(res, err);
    }
});

//* POST and update the list on json data
router.post('/titleAuthor', (req,res) => {
    try {
        const { title, author } = req.body;
        
        res.status(200).json({
            title: title,
            author: author,
            timestamp: req.timeStamp
        })

    } catch (err) {
        // res.status(500).json({
        //     error: err.message
        // })
        errorHandling(res, err)
    }
})

module.exports = router;