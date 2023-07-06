const {EmployeeCreation,getEmpDetails,Empupdation,getempLogin,getregistredEmail} = require('./emplueeCreation.service');

module.exports={
    EmployeeCreation:(req,res)=>{
        const body=req.body;
        EmployeeCreation(body,(err,results)=>{
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
                message:"New Employee Added"
            })
        })
      },
      getEmpDetails:(req,res)=>{
        const id = req.params.id;
        getEmpDetails(id,(err,results)=>{
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
                data:results
            })
        })
      },
      Empupdation:(req,res)=>{
        const body = req.body;
        Empupdation(body,(err,results)=>{
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
                data:"Employee details updated"
            })
        })
      },
      getempLogin:(req,res)=>{
        const id = req.params.id;
        getempLogin(id,(err,results)=>{
              if(err){
                return res.status(400).json({
                    success:0,
                    message:err
                })
            }
            else if(results.length==0){
                return res.status(200).json({
                    success:1,
                    message:"Employee email and password does not match"
                })
            }
            return res.status(200).json({
                success:2,
                data:results
            })
        })
      },
      getregistredEmail:(req,res)=>{
        const id = req.params.id;
        getregistredEmail(id,(err,results)=>{
              if(err){
                return res.status(400).json({
                    success:0,
                    message:err
                })
            }
            else if(results.length==0){
                return res.status(200).json({
                    success:1,
                    message:"user email doesnot exist! please sign up"
                })
            }
            return res.status(200).json({
                success:2,
                data:results
            })
        })
      },
}