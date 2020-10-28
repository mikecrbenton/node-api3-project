const express = require('express');
const users = require('./userDb')
const router = express.Router();

const { validateUserID } =  require('../middleware/user')

router.post('/', (req, res) => {
  // do your magic!
});

router.post('/:id/posts', (req, res) => {
  // do your magic!
});

// COMPLETE
router.get('/', (req, res) => {
  users.get()
   .then( (users) => {
      console.log("in get")
      res.status(200).json(users)
   })
   .catch( (err) => {
      next(err)
   })
});

// COMPLETE - W/MIDDLEWARE
router.get('/:id', validateUserID(), (req, res) => {
   res.status(200).json(req.user)
});

// COMPLETE - W/MIDDLEWARE
router.get('/:id/posts', validateUserID(), (req, res) => {
   users.getUserPosts(req.params.id)
      .then( (response) => {
         res.json(response)
      })
      .catch( (error) => {
         next(error)
      })
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
