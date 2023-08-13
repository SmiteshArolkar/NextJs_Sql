import { db } from "@/config/db";

export default async (req, res) => {
  var sql =
    "INSERT INTO requests (eventid, startdate, enddate, address, email, phone, status) VALUES ('" +
    req.body.event +
    "','" +
    req.body.startDate +
    "','" +
    req.body.endDate +
    "','" +
    req.body.address +
    "','" +
    req.body.email +
    "','" +
    req.body.phone +
    "','" +
    req.body.status +
    "')";

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
                message : "Request Registered"
            })
        }
         
    })
};
