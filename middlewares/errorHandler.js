module.exports = (err, req, res , next)=>{
    err.statusCode = err.statusCode || 500
    err.status = err.status || 'error'

    res.status(err.statusCode).json({code : err.statusCode,status:err.status ,
        stackTrace : err.stack,  message : err.message , error:err})
    next()
}