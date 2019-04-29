const express = require('express');
const router = express.Router();
const api = require('../../index.js');
const JP_Trials = require('../../models/chatbot/trial/jp');
const JP_Report = require('../../models/chatbot/trial/jp_report');
const KR_Trials = require('../../models/chatbot/trial/kr');
const KR_Report = require('../../models/chatbot/trial/kr_report');
const ENG_Trials = require('../../models/chatbot/trial/eng');
const ENG_Report = require('../../models/chatbot/trial/eng_report');
//const Courses = require('../models/course_search');

router.get('/jp', (req, res, next) => {
    JP_Trials.find({},(err,jp_trials) =>{
        if(err){
            return next(err)
        }
        //console.log(`courses in index.js: ${courses}`);
        res.render('./chatbot/trial/jp',{
            title:"武藏外語教育中心",
            jp_trials: jp_trials,
        });
    });

});
router.post('/jp', function(req, res) {
    /*
    console.log(req.body.course_time);
    const content = JSON.parse(req.body.course_time);
    const courseName = content.course_type;
    const dayOfWeek = content.dayOfWeek;
    const begin_time = content.begin_time;
    const end_time = content.end_time;
    const mydate = new Date(content.course_date);
    content.course_time = `${mydate.getUTCFullYear()}-${mydate.getUTCMonth()+1}-${mydate.getUTCDate()} (${dayOfWeek}) ${begin_time}-${end_time}`;
    delete req.body.course_time
    req.body.course_time = content.course_time;
    req.body.course_name = courseName;
    */
    

    const jp_report = new JP_Report(req.body);
    //console.log(student);
    jp_report.save((err,doc) => {
        if(err){
            return next(err)
        }
        res.redirect('/trial/jp');
    })
    let sender_psid=req.body.fb_psid;
    const langType=req.body.lang_type;
    console.log(`langType: ${langType}`);
    if(sender_psid && req.body.course_time){
        console.log("sender_psid && courseTime");
        api.sendTrialInfo(sender_psid,langType,req.body.course_time);
        
    }else if (sender_psid)
    {
        console.log("sender_psid");
        api.sendTrialGeneralInfo(sender_psid);
    }
});

router.get('/kr', (req, res, next) => {
    KR_Trials.find({},(err,kr_trials) =>{
        if(err){
            return next(err)
        }
        //console.log(`courses in index.js: ${courses}`);
        res.render('./chatbot/trial/kr',{
            title:"武藏外語教育中心",
            kr_trials: kr_trials,
        });
    });

});
router.post('/kr', function(req, res) {
    const kr_report = new KR_Report(req.body);
    //console.log(student);
    kr_report.save((err,doc) => {
        if(err){
            return next(err)
        }
        res.redirect('/trial/kr');
    })
    let sender_psid=req.body.fb_psid;
    const langType=req.body.lang_type;
    console.log(`langType: ${langType}`);
    if(sender_psid && req.body.course_time){
        console.log("sender_psid && courseTime");
        api.sendTrialInfo(sender_psid,langType,req.body.course_time);
        
    }else if (sender_psid)
    {
        console.log("sender_psid");
        api.sendTrialGeneralInfo(sender_psid);
    }
});
router.get('/eng', (req, res, next) => {
    ENG_Trials.find({},(err,eng_trials) =>{
        if(err){
            return next(err)
        }
        //console.log(`courses in index.js: ${courses}`);
        res.render('./chatbot/trial/eng',{
            title:"武藏外語教育中心",
            eng_trials: eng_trials,
        });
    });

});
router.post('/eng', function(req, res) {
    const eng_report = new ENG_Report(req.body);
    //console.log(student);
    eng_report.save((err,doc) => {
        if(err){
            return next(err)
        }
        res.redirect('/trial/eng');
    })
    let sender_psid=req.body.fb_psid;
    if (sender_psid)
    {
        console.log("sender_psid");
        api.sendTrialGeneralInfo(sender_psid);
    }
});

router.get('/report', (req, res, next) => {
    if(req.user){
        JP_Report.find({},{},{sort:{createdAt:-1}},(err,jp_reports) =>{
            if(err){
                return next(err)
            }
            KR_Report.find({},{},{sort:{createdAt:-1}},(err,kr_reports) =>{
                if(err){
                    return next(err)
                }
                ENG_Report.find({},{},{sort:{createdAt:-1}},(err,eng_reports) =>{
                    if(err){
                        return next(err)
                    }
                    //console.log(`courses in index.js: ${courses}`);
                    res.render('./chatbot/report/trial_report',{
                        title:"試聽課程諮詢總表",
                        jp_reports: jp_reports,
                        kr_reports: kr_reports,
                        eng_reports: eng_reports,
                    });
                });
            });
        });
    }else{
        res.redirect('/');
    }

});

router.get('/available', (req, res, next) => {
    if(req.user){
        JP_Trials.find({},{},{sort:{createdAt:-1}},(err,jp_trials) =>{
            if(err){
                return next(err)
            }
            KR_Trials.find({},{},{sort:{createdAt:-1}},(err,kr_trials) =>{
                if(err){
                    return next(err)
                }
                ENG_Trials.find({},{},{sort:{createdAt:-1}},(err,eng_trials) =>{
                    if(err){
                        return next(err)
                    }
                    //console.log(`courses in index.js: ${courses}`);
                    res.render('./chatbot/trial/available',{
                        title:"試聽課程開課總表",
                        jp_trials: jp_trials,
                        kr_trials: kr_trials,
                        eng_trials: eng_trials,
                    });
                });
            });
        });
    }else{
        res.redirect('/');
    }

});
router.post('/delete', function(req, res) {

    if(req.user){

        const trials=req.body.trial;
        if(typeof trials==='string'){
            let finalTrial = trials.split(" ");
            if(finalTrial[1] ==='英語'){
                ENG_Trials.remove({_id:finalTrial[0]},(err) =>{
                    if(err){
                        return next(err)
                    }
                    
                })
            }else if(finalTrial[1] ==='日語'){
                JP_Trials.remove({_id:finalTrial[0]},(err) =>{
                    if(err){
                        return next(err)
                    }
                    
                })
            }else if(finalTrial[1] ==='韓語'){
                KR_Trials.remove({_id:finalTrial[0]},(err) =>{
                    if(err){
                        return next(err)
                    }
                    
                })
            }

        }else if(typeof trials==='object'){
            for(var i=0;i<= (trials.length-1);i++) {
                let finalTrial = trials[i].split(" ");
                if(finalTrial[1] ==='英語'){
                    ENG_Trials.remove({_id:finalTrial[0]},(err) =>{
                        if(err){
                            return next(err)
                        }
                    })
                }else if(finalTrial[1] ==='日語'){
                    JP_Trials.remove({_id:finalTrial[0]},(err) =>{
                        if(err){
                            return next(err)
                        }
                        
                    })
                }else if(finalTrial[1] ==='韓語'){
                    KR_Trials.remove({_id:finalTrial[0]},(err) =>{
                        if(err){
                            return next(err)
                        }
                        
                    })
                }
            }
        }
        res.redirect('/trial/available');
    }else{
        res.redirect('/');
    }

});
router.post('/report/delete', function(req, res) {

    if(req.user){
        const trialReport=req.body.trial_report;
        if(typeof trialReport==='string'){
            let finalCourse = trialReport.split(" ");
            if(finalCourse[1] ==='日語'){
                JP_Report.remove({_id:finalCourse[0]},(err) =>{
                    if(err){
                        return next(err)
                    }
                    
                })
            }else if(finalCourse[1] ==='韓語'){
                KR_Report.remove({_id:finalCourse[0]},(err) =>{
                    if(err){
                        return next(err)
                    }
                    
                })
            }else if(finalCourse[1] ==='英語'){
                ENG_Report.remove({_id:finalCourse[0]},(err) =>{
                    if(err){
                        return next(err)
                    }
                    
                })
            }

        }else if(typeof trialReport==='object'){
            for(var i=0;i<= (trialReport.length-1);i++) {
                let finalCourse = trialReport[i].split(" ");
                if(finalCourse[1] ==='日語'){
                    JP_Report.remove({_id:finalCourse[0]},(err) =>{
                        if(err){
                            return next(err)
                        }
                        
                    })
                }else if(finalCourse[1] ==='韓語'){
                    KR_Report.remove({_id:finalCourse[0]},(err) =>{
                        if(err){
                            return next(err)
                        }
                        
                    })
                }else if(finalCourse[1] ==='英語'){
                    ENG_Report.remove({_id:finalCourse[0]},(err) =>{
                        if(err){
                            return next(err)
                        }
                        
                    })
                }
            }
        }
        res.redirect('/trial/report');
    }else{
        res.redirect('/');
    }

});
module.exports = router