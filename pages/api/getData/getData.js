import { db } from "@/config/db";


export default async (req,res) => {

    const sql = "SELECT * FROM dummy";
    db.query(sql,function(error,result){
        if(error)
        {
            return res.send({
                status : "fail",
                message : error
            })
        }
        else{
            return res.send({
                status:"success query",
                message:"Data fetched Successfully",
                data:result
            })
        }
    })
}