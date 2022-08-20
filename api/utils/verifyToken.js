const createError = require("./error");
const jwt = require("jsonwebtoken")


exports.verifyToken = (req,res,next) => {
    
    const token = req.cookies.access_token;

    if(!token){
        return next(createError(401,"Not authenticated"))
    }
jwt.verify(token,process.env.JWT,(err,user)=>{
    if(err) return next(createError(403,"Token is not valid"));
    req.user = user;
    next()
})
}

exports.verifyUser = (req,res)=>{
    this.verifyToken(req,res,next,()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next()
        }else{
             return next(createError(403,"You are not authorized"));

        }
    })
}

exports.isAdmin = (req,res)=>{
    verifyToken(req,res,next,()=>{
        if(req.user.isAdmin){
            next()
        }else{
             return next(createError(403,"You are not authorized"));

        }
    })
}