import { db } from "@/config/db";

export default async (req,res) => {
    var sql = "DELETE FROM requests WHERE requestid = '"+req.body.requestId+"'"

    db.query(sql,function(error,result){
        if(error){
            return res.send({
                status:"fail",
                message:error,
            })

        } else {
            return res.send({
                status:"success",
                message:"delete successful"
            })
        }
    })


}