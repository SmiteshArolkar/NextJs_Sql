import { db } from "@/config/db";


export default async (req,res) => {
    var sql =  "SELECT * FROM requests Where status = 'pending' and email != '"+req.body.email+"'"

    db.query(sql,function(error,result){
        if(error)
        {
            res.send({
                status:"Failed",
                message:error
            })
        } else {
            res.send({
                status:"Success",
                message:"",
                data : result
            })
        }
    })
}