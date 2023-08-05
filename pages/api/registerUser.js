import { db } from "@/config/db";


export default async (req,res) => {
    var sql = "INSERT INTO users VALUES ('"+req.body.email+"','"+req.body.phone+"','"+req.body.city+"','"+req.body.state+"','"+req.body.address+"','"+req.body.role+"','"+req.body.name+"')";
    db.query(sql,function(error,result){
        if(error) 
        return res.send({
            status : "fail",
            message : error
        })
        else
        {
            return res.send({
                status : "success",
                message : "Data inserted"
            })
        }
    })
}