import { db } from "@/config/db";

export default async (req,res) => {
    var sql = "select * from events"
    db.query(sql,function(error,result){
        if( error ) {
            console.log(error)
            res.status(500).json({
                status: "fail",
                message: "An error occurred while inserting the event.",
            });
        } else {
            res.send({
                status: "success",
                data: result,
            })
        }
    })
}