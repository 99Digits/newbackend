const express=require('express')
const router = express.Router();
const {insertservicereg,serviceupdation,ServiceRegistartionselect,
    serviceAccept} = require('./serviceRegistration.controller');

router.post('/insert',insertservicereg);
router.patch('/update',serviceupdation);
router.get('/select/:id',ServiceRegistartionselect);
router.post('/accept',serviceAccept)
module.exports=router;