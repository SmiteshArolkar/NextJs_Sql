import { db } from "@/config/db";
import { response } from "express";

export default async (req,res) => {
    var sql =  "UPDATE requests SET status = 'approved' where requestid = '"+req.body.requestid+"'"
    var sql2 = "INSERT INTO acceptedrequests (requestid,supplier,supplier_phone) VALUES ('"+req.body.requestid+"','"+req.body.supplier+"','"+req.body.supplier_phone+"')"

    db.query(sql,function(error,result){
        if(error)
        {
            res.send({
                status:"Failed",
                message:error
            })
        } else {
            db.query(sql2,function(error,result){
                if(error)
                {
                    res.send({
                        status:"Failed",
                        message:error
                    })
                } else {
                    res.send({
                        status:"Success",
                        message:"Request Accepted",
                        data : result
                    })
                }
            })
        }
    })
}