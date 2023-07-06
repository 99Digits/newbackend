const {insertuser,updateuser,getuserloginpassword,getuserEmail} = require('./usercreation.service')

module.exports ={
    insertuser :(req,res)=>{
        const body=req.body;
        insertuser(body,(err,results)=>{
              if(err){
                return res.status(400).json({
                    success:0,
                    message:err
                })
            }
            else if(results.length==0){
                return res.status(200).json({
                    success:1,
                    message:"no records"
                })
            }
            return res.status(200).json({
                success:2,
                message:"user created succesfully"
            })
        })
      },
      updateuser :(req,res)=>{
        const body=req.body;
        updateuser(body,(err,results)=>{
              if(err){
                return res.status(400).json({
                    success:0,
                    message:err
                })
            }
            else if(results.length==0){
                return res.status(200).json({
                    success:1,
                    message:"no records"
                })
            }
            return res.status(200).json({
                success:2,
                message:"user details updated"
            })
        })
      },
      getuserloginpassword:(req,res)=>{
        const id=req.params.id;
        getuserloginpassword(id,(err,results)=>{
              if(err){
                return res.status(400).json({
                    success:0,
                    message:err
                })
            }
            else if(results.length==0){
                return res.status(200).json({
                    success:1,
                    message:"user name nd password id does not match"
                })
            }
            return res.status(200).json({
                success:2,
                message:results
            })
        })
      },
      getuserEmail:(req,res)=>{
        const id=req.params.id;
        getuserEmail(id,(err,results)=>{
              if(err){
                return res.status(400).json({
                    success:0,
                    message:err
                })
            }
            else if(results.length==0){
                return res.status(200).json({
                    success:1,
                    message:"user email does not exist! please sign up "
                })
            }
            return res.status(200).json({
                success:2,
                message:results
            })
        })
      },
}