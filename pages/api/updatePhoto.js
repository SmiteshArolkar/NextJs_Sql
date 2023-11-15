import { db } from "@/config/db";

export default async (req, res) => {
  const sql =
    "update users set photo = '" +
    req.body.photo +
    "' where email = '" +
    req.body.email +
    "' ";

    db.query(sql,function(error,result){
        if(error)
        {
            res.send({
                status: "failed",
                message : error
            })
        } else {
            res.send({
                status : "Success",
                message : "image integration successful"
            })
        }
    })
};
