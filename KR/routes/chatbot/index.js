const express= require('express');
const router = express.Router();
//let FB_TOKEN = require('../fb_pass');
//const PAGE_ACCESS_TOKEN= FB_TOKEN.TOKEN


router.get('/', (req, res, next) => {
    //console.log("REQ.USER: "+ req.user);
    if(req.user){
    //res.render('chat', { user: req.user, messages })
        res.render('./chatbot/index',{
            title:"武藏後台一覽表",
        });
    } else {
        res.redirect('/admin/login')
    }
});

module.exports = router;
