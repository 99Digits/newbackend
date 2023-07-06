const mysql = require("mysql");
var pool = mysql.createConnection({
  host:'localhost',
  user:"root",
  password:"",
  database:'handyman',
});


module.exports={
    insertuser:(data,callback)=>{
        pool.query(`insert into user_creation
        (user_fname,
        user_lname,
        phone,
        address,
        email,
        user_pasword)
        values(?,?,?,?,?,?)`,
        [
            data.user_fname,
            data.user_lname,
            data.phone,
            data.address,
            data.email,
            data.user_pasword
     
        ],
       (error,results,feilds)=>{
          if(error){
            return callback(error)
          }
          return callback(null,results);
        } 
        )
    },

    updateuser:(data,callback)=>{
      pool.query(`update user_creation set 
        user_fname =?,
        user_lname =?,
        phone=?,
        address=?,
        email=?,
        user_pasword=?
        where id=?`, 
        [
            data.user_fname,
            data.user_lname,
            data.phone,
            data.address,
            data.email,
            data.user_pasword,
            data.id
    
        ],
        (error,results,feilds)=>{
          if(error){
            return callback(error)
          }
          return callback(null,results);
        }
      )
    },



    getuserloginpassword:(id,callback)=>{
      pool.query(`SELECT user_pasword FROM user_creation WHERE email=?`,
      [id],
      (error,results,feilds)=>{
        if(error){
          return callback(error)
        }
        return callback(null,results);
      },
      )
    },

    getuserEmail:(id,callback)=>{
      pool.query(`SELECT email FROM user_creation WHERE email = ?`,
      [id],
      (error,results,feilds)=>{
        if(error){
          return callback(error)
        }
        return callback(null,results);
      },
      )
    },

    
    // function createOTP(params, callback) {
    //   const otp = otpGenerator.generate(4, {
    //     alphabet: false,
    //     upperCase: false,
    //     specialChars: false
    //   });
    
    //   const xx = 5 * 60 * 1000;
    //   const expires = Date.now() + xx;
    //   const data = `${params.phone}.${otp}.${expires}`;
    //   const hash = crypto.createHmac("sha256", "secretKey").update(data).digest("hex");
    //   const fullhash = `${hash}.${expires}`;
    
    //   console.log(`Your OTP is: ${otp}`);
    //   return callback(null, fullhash);
    // }
    


  }