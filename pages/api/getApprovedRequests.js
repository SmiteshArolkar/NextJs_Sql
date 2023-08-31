import { db } from "@/config/db";

export default async (req,res)  => {
    var sql = "SELECT * FROM acceptedrequests where user = '"+req.body.email+"'"
    db.query(sql,function(error,result){
        if(error)
        {
            res.send({
                status:"Fail",
                message:error
            })
        } else {
            res.send({
                status:"successful",
                data:result
            })
        }
    })
}