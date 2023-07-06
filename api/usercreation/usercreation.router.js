
const router = require("express").Router();
const {insertuser,updateuser,getuserloginpassword,getuserEmail} = require('./usercreation.controller');

router.post('/userinsert',insertuser);
router.patch('/updateuser',updateuser);
router.get('/loginpassword/:id',getuserloginpassword);
router.get('/getemail/:id',getuserEmail);

module.exports=router;