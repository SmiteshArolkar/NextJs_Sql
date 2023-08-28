import { db } from "@/config/db";


export default async (req, res) => {
  var sql =
    "UPDATE requests SET status = 'accepted' where requestid = '" +
    req.body.requestid +
    "'";
  var sql1 = "SELECT * FROM requests WHERE requestid = '" + req.body.requestid + "'";
 

  db.query(sql, function (error, result) {
    if (error) {
      res.send({
        status: "Failed",
        message: error,
      });
    } else {
      // db.query(sql2,function(error,result){
      //     if(error)
      //     {
      //         res.send({
      //             status:"Failed",
      //             message:error
      //         })
      //     } else {
      //         res.send({
      //             status:"Success",
      //             message:"Request Accepted",
      //             data : result
      //         })
      //     }
      // })
      db.query(sql1, function (error, result) {
        if (error) {
          res.send({
            status: "Failed",
            message: error,
          });
        } else {
            console.log(result)
            var s = "INSERT INTO acceptedrequests (requestid,address,enddate,eventid,phone,startdate,status,supplier,supplier_phone,user) VALUES ('"+req.body.requestid+"','"+result[0].address+"','"+result[0].enddate+"','"+result[0].eventid+"','"+result[0].phone+"','"+result[0].startdate+"','"+result[0].status+"','"+req.body.supplier+"','"+req.body.supplier_phone+"','"+result[0].email+"')"
          db.query(s,function(error,result)
          {
            if(error)
            {
                res.send({
                    status:"Error Failed",
                    message:error
                })
            } else 
            {
                res.send({
                    status:"Success",
                    message:"Request Accepted",
                    data : result
                })
            }
          });
        }
      });
    }
  });
};
