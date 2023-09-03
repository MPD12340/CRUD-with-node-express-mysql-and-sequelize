const notFoundMiddleware = (req, res , next)=>{
    res.status(404).json({msg: `Page not found at url ${req.originalUrl}`})
    next()
}

module.exports = notFoundMiddleware