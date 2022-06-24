import jwt from 'jsonwebtoken'
export const auth =(req,res,next)=>{
              try{
                
                const token = req.header("x-auth-token");
                if(!token){
                   return res.status(401).send({msg:err.message})
                }else{
                jwt.verify(token,process.env.key)
                next()
                }

              }catch(err){
                res.status(401).send({msg:err.message})
              }
}