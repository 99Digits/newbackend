const {insertservicereg,serviceUpdation,ServiceRegistartionselect,serviceAccept} = require('./serviceRegistraion.service')


module.exports={
    insertservicereg:(req,res)=>{
        const body=req.body;
        insertservicereg(body,(err,results)=>{
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
                message:"your service registred succesfully"
            })
        })
      },
      serviceupdation:(req,res)=>{
        const body=req.body;
        serviceUpdation(body,(err,results)=>{
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
                message:"servicess updated succesfully"
            })
        })
      },
      ServiceRegistartionselect:(req,res)=>{
        const id = req.params.id;
        ServiceRegistartionselect(id,(err,results)=>{
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
      serviceAccept:(req,res)=>{
        const body=req.body;
        serviceAccept(body,(err,results)=>{
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
                message:"Accepted"
            })
        })
      },
}
