import { db } from "@/config/db";

export default async (req, res) => {

    var sql = "SELECT * FROM users where role != 'admin' "
    db.query(sql, function (err, result) {
        if( err )
        {
            res.send({
                status: "failed",
                message:err
            })
        } else {
            res.send({
                status: "success",
                data: result
            })
        }
    });
}