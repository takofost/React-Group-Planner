var express =require('express');
var router=express.Router();
var crud=require('./api/crud');
var chatrecord=require('./api/chatRecord');


router.post('/add',crud.save);   
router.get('/get',crud.get);  
router.delete('/delete/:id',crud.delete);   // id k through delete kare gye record ko 
router.put('/update/:id',crud.update);   
                                                // corse bi add karna hai taka different browser sa response mile differnt port sa
router.get('/get/:id',crud.getbyid);          //check id behv data get
router.post('/login',crud.getbyLogin);

router.post('/chatsave',chatrecord.save);
router.get('/getchatsave',chatrecord.get);



module.exports=router;

