
const mysql = require("mysql");
const pool = mysql.createConnection({
  host:process.env.host,
  user:process.env.username,
  password:process.env.password,
  database:process.env.DATABASE,
});


module.exports=pool;