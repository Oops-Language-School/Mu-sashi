const express = require('express');
const router = express.Router();
const api = require('../../index.js');
const AbroadJP = require('../../models/abroad/jp_report');
const AbroadKR = require('../../models/abroad/kr_report');
const AbroadENG = require('../../models/abroad/eng_report');



router.get('/jp', (req, res, next) => {
    res.render('./chatbot/abroad/jp');

});

router.post('/jp', function(req, res) {
    const abroadJP = new AbroadJP(req.body);
    abroadJP.save((err,doc) => {
        if(err){
            return next(err)
        }
        let sender_psid=abroadJP.fb_psid; 
        if(sender_psid){
            api.sendAbroadInfo(sender_psid);
        }
        res.redirect('/abroad/jp');
    })
});
  
router.get('/kr', (req, res, next) => {
    res.render('./chatbot/abroad/kr');

});

router.post('/kr', function(req, res) {
    const abroadKR = new AbroadKR(req.body);
    abroadKR.save((err,doc) => {
      if(err){
          return next(err)
      }
      let sender_psid=abroadKR.fb_psid; 
      if(sender_psid){
          api.sendAbroadInfo(sender_psid);
      }
      res.redirect('/abroad/kr');

    })

    
});
router.get('/eng', (req, res, next) => {
    res.render('./chatbot/abroad/eng');

});
router.post('/eng', function(req, res) {
    const abroadENG = new AbroadENG(req.body);
    abroadENG.save((err,doc) => {
      if(err){
          return next(err)
      }
      let sender_psid=abroadENG.fb_psid; 
      if(sender_psid){
          api.sendAbroadInfo(sender_psid);
      }
      res.redirect('/abroad/eng');
    })

});

router.get('/report', (req, res, next) => {
    if(req.user){
        AbroadJP.find({},{},{sort:{createdAt:-1}},(err,abroadJP) =>{
            if(err){
                return next(err)
            }
            AbroadKR.find({},{},{sort:{createdAt:-1}},(err,abroadKR) =>{
                if(err){
                    return next(err)
                }
                AbroadENG.find({},{},{sort:{createdAt:-1}},(err,abroadENG) =>{
                    if(err){
                        return next(err)
                    }
                    res.render('./chatbot/report/abroad_report',{
                        title:"留遊學諮詢總表",
                        abroadJP: abroadJP,
                        abroadKR: abroadKR,
                        abroadENG: abroadENG,
                    });
                });
            });
        });
    }
    else{
        res.redirect('/');
    }
});
router.post('/delete', function(req, res) {

    if(req.user){
        const abroad_report=req.body.abroad;
        if(typeof abroad_report==='string'){
            let finalCourse = abroad_report.split(" ");
            if(finalCourse[1] ==='日語'){
                AbroadJP.remove({_id:finalCourse[0]},(err) =>{
                    if(err){
                        return next(err)
                    }
                    
                })
            }else if(finalCourse[1] ==='韓語'){
                AbroadKR.remove({_id:finalCourse[0]},(err) =>{
                    if(err){
                        return next(err)
                    }
                    
                })
            }else if(finalCourse[1] ==='英語'){
                AbroadENG.remove({_id:finalCourse[0]},(err) =>{
                    if(err){
                        return next(err)
                    }
                    
                })
            }

        }else if(typeof abroad_report==='object'){
            for(var i=0;i<= (abroad_report.length-1);i++) {
                let finalCourse = abroad_report[i].split(" ");
                if(finalCourse[1] ==='日語'){
                    AbroadJP.remove({_id:finalCourse[0]},(err) =>{
                        if(err){
                            return next(err)
                        }
                        
                    })
                }else if(finalCourse[1] ==='韓語'){
                    AbroadKR.remove({_id:finalCourse[0]},(err) =>{
                        if(err){
                            return next(err)
                        }
                        
                    })
                }else if(finalCourse[1] ==='英語'){
                    AbroadENG.remove({_id:finalCourse[0]},(err) =>{
                        if(err){
                            return next(err)
                        }
                        
                    })
                }
            }
        }
        res.redirect('/abroad/report');
    }else{
        res.redirect('/');
    }

});

module.exports = router;
