import { db } from "@/config/db";
import { useContext } from "react";

export default async (req, res) => {
  console.log(req.body.email);
  const sql = "SELECT * FROM users WHERE email = '"+req.body.email+"'";
  
  if (!req.body.email) {
    return res.status(400).send({
      status: "fail",
      message: "Email is missing in the request body",
    });
  }

  db.query(sql, function (error, result) {
    if (error) {
      return res.send({
        status: "fail",
        message: error,
      });
    } else {
      return res.send({
        status: "success",
        message: "Data fetched successfully",
        data: result,
      });
    }
  });
};
