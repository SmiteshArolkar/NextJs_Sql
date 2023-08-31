import { db } from "@/config/db";

export default async (req,res) => {
    var sql = "SELECT * FROM chatbox where receiver = '"+req.body.email+"'"

    db.query(sql,function(error,result){
        if(error)
        {
            res.send({
                status:"fail",
                message:error
            })
        } else {
            res.send({
                status:"success",
                data:result
            })
        }
    })
}