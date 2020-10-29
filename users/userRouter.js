const express = require('express');
const users = require('./userDb')
const router = express.Router();

const { validateUserID, validateUser } =  require('../middleware/user')
const { validatePost } =  require('../middleware/post')
const { logger } =  require('../middleware/logger')

// COMPLETE
router.post('/', logger(), validateUser(), (req, res) => {
   users.insert(req.body)
   .then((user) => {
      res.status(201).json(user)
   })
   .catch((error) => {
      console.log(error)
      next(error)
   })
});

// COMPLETE
router.post('/:id/posts', logger(), validateUserID(), validatePost(), (req, res) => {
   users.addUserPost(req.params.id, req.body)
   .then( (response) => {
      res.status(201).json(response)
   })
   .catch( (error) => { 
      console.log(err) // for developer
      next(error)
   })
});

// COMPLETE
router.get('/',logger(), (req, res) => {
  users.get()
   .then( (users) => {
      console.log("in get")
      res.status(200).json(users)
   })
   .catch( (err) => {
      next(err)
   })
});

// COMPLETE 
router.get('/:id', logger(), validateUserID(), (req, res) => {
   res.status(200).json(req.user)
});

// COMPLETE 
router.get('/:id/posts', logger(), validateUserID(), (req, res) => {
   users.getUserPosts(req.params.id)
      .then( (response) => {
         res.json(response)
      })
      .catch( (error) => {
         next(error)
      })
});

// COMPLETE
router.delete('/:id', logger(), validateUserID(), (req, res) => {
   users.remove(req.params.id)
   .then((count) => {
      if (count > 0) {
         res.status(200).json({
            message: "The user has been removed",
         })
      } else {
         res.status(404).json({
            message: "The user could not be found",
         })
      }
   })
   .catch((error) => {
      console.log(error)
      next(error)
   })
});

// COMPLETE ?
router.put('/:id', logger(), validateUserID(), (req, res) => {
   users.update(req.params.id, req.body)
   .then((user) => {
      if (user) {
         res.status(201).json(user)
      } else {
         res.status(404).json({
            message: "The user could not be found",
         })
      }
   })
   .catch((error) => {
      console.log(error)
      next(error)
   })
});



module.exports = router;
