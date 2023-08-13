import { db } from "@/config/db";

export default async (req, res) => {
  var sql =
    "UPDATE users SET role = '" +
    req.body.role +
    "' WHERE email = '" +
    req.body.email +
    "'";
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
        message: "User role updated successfully",
      });
    }
  });
};
