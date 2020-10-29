const express = require('express');
const posts = require('./postDb')
const { validateUserID, validateUser } =  require('../middleware/user')
const { validatePost } =  require('../middleware/post')
const { logger } =  require('../middleware/logger')

const router = express.Router();


// COMPLETE
router.get('/',logger(), (req, res) => {
   posts.get()
    .then( (posts) => {
       console.log("in get")
       res.status(200).json(posts)
    })
    .catch( (err) => {
       next(err)
    })
 });
 

router.get('/:id', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});


module.exports = router;
