const logger = (req,res,next) =>{ //next is important for stopping certian requests happening
    console.log(req.method, req.originalUrl)
    next()
}

module.exports = logger