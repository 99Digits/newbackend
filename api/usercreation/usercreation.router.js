
const router = require("express").Router();
const {insertuser,updateuser,getuserloginpassword,getuserEmail} = require('./usercreation.controller');

router.post('/userinsert',insertuser);
router.patch('/updateuser',updateuser);
router.post('/loginpassword',getuserloginpassword);
router.get('/getemail/:id',getuserEmail);

module.exports=router;