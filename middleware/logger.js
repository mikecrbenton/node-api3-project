

function logger() { 
   
   return (req,res, next) => {
     
      const time = new Date().toISOString()
      console.log(`[ ${time} ${req.ip} ${req.method} ${req.url} ]`)
             
      // function that is called by middleware to move to the next piece
      next()
   }

}

module.exports = {
   logger
}