import { db } from "@/config/db";

export default async (req,res) => {
    var sql = "SELECT * FROM requests WHERE email = '"+req.body.email+"'"

    db.query(sql,function(error,result){
        if(error)
        {
            return res.send({
                status : "fail",
                message:error
            })
        } else {
            return res.send({
                status:"success",
                message:"data fetched successful",
                data:result
            })
        }
    })
}