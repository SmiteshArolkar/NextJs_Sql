import { db } from "@/config/db";

export default async (req, res) => {
  const sql =
    "UPDATE events SET title = ' " +
    req.body.title +
    "', description = '" +
    req.body.description +
    "', content = '" +
    req.body.content +
    "',imageUrl = '" +
    req.body.imageUrl +
    " ' where eventID = '"+req.body.id+"'  ";

    db.query(sql,function(error,result){
        if(error)
        {
            res.send({
                status:"failure",
                message:error
            })

        } else {
            res.send({
                status : "success",
                message : "Event Updated"
            })
        }
    })
};
