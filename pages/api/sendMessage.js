import { db } from "@/config/db";

export default async (req,res) => {
    var sql = "insert into chatbox (event,message,receiver,requestid,sender,send_date) VALUES ('"+req.body.event+"','"+req.body.message+"','"+req.body.receiver+"','"+req.body.requestid+"','"+req.body.sender+"','"+req.body.sendDate+"')" 
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