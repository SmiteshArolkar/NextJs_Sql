import { db } from "@/config/db";

export default async (req, res) => {
  const query =
    "UPDATE users SET name = '" +
    req.body.name +
    "',  phone = '" +
    req.body.phoneNumber +
    "' ,  address = '" +
    req.body.address +
    "' ,  city = '" +
    req.body.city +
    "' ,  state = '" + req.body.state +"' where email = '"+req.body.email+"'  " 

    db.query(query,function(error,response){
        if(error)
        {
            res.send({
                status: "failed",
                message : error
            })
        } else {
            res.send({
                status: "success",
                message : "data insertion success"
            })
        }
    })
};
