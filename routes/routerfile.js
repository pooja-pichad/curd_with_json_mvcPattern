const express=require("express");
const { get_method, post_method, put_method, delete_data } = require("../controller/logic");
const router=express.Router();


router.get('/getdata',get_method)
router.post('/postdata1',post_method)
router.put('/putdata/:id',put_method)
router.delete('/deletedata/:id',delete_data)





module.exports = {router}