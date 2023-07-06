const mysql = require("mysql");
var pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "handyman",
});
 module.exports={
    selectSubscrptionService:(id,callback)=>{
        pool.query(`SELECT sub_slno	,subcr_detl
         FROM subscrption_service WHERE sub_type = ?`,[id],
        (error,results,feilds)=>{
            if(error){
                return callback(error)
            }
            return callback(null,results)
        }
        )
    }
 }