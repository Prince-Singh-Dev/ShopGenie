import jwt from 'jsonwebtoken'

const adminAuth = async (req,res,next) => {
    try{
        let {token} = req.cookies 

        if(!token) {
            return res.status(400).json({message : "Not Authorized , Login Again"})
        }

        let verifyToken = jwt.verify(token,process.env.JWT_SECRET)

        if(!verifyToken){
            return res.status(400).json({message : "Not Authorized , Login Again , Invalid token"})

        }

        res.adminEmail = process.env.ADMIN_EMAIL

        next()

    }catch(error){
        console.log("Admin Auth Error")
        return res.status(500).json({message : `Admin Auth Error ${error}`})
    }
}

export default adminAuth