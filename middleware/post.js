const posts = require('../posts/postDb')

function validatePost() {
   return (req,res,next) => {
      if (!req.body) {
         return res.status(400).json({message: "Missing post data" })
      }else if(!req.body.text){
         return res.status(400).json({message: "Missing required text field" })
      }
      next()
   }
}

module.exports = {
   validatePost
}