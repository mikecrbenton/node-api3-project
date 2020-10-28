const users = require('../users/userDb')
const posts = require('../posts/postDb')

function validateUserID() {
   return (req,res,next) => {
      users.getById(req.params.id)
         .then((user) => {
            if (user) {
               // ATTACH DATA TO THE REQUEST SO IT CAN BE ACCESSED
               // IN THE STACK OF MIDDLEWARE FUNCTIONS AS IT IS
               // PASSED ALONG
               req.user = user;
               next() //middleware continues if conditions met
            } else {
               res.status(404).json({
                  message: "Invalid user id",
               })
            }
         })
         .catch((error) => {
            console.log(error)
            next(err) // ERROR MIDDLEWARE
         })
   }
}

module.exports = {
   validateUserID
}