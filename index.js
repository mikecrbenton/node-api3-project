const express = require('express')

// IMPORTS
const users = require('./users/userDb')
const posts = require('./posts/postDb')
const userRouter = require('./users/userRouter')
const postRouter = require('./posts/postRouter')

const server = express()
const port = 4000

// MIDDLEWARE
server.use(express.json())
server.use(userRouter)
server.use(postRouter)

// ERROR MIDDLEWARE
server.use( (err, req, res, next) => {
   console.log(err)
   res.status(500).json( { message: "Error in processing"})
})

server.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`)
})