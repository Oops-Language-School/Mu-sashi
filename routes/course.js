const express = require('express');
const router = express.Router();
const api = require('../index');
const JP_Courses = require('../models/course/jp');
const JP_Report = require('../models/course/jp_report');
const KR_Courses = require('../models/course/kr');
const KR_Report = require('../models/course/kr_report');
router.get('/jp', (req, res, next) => {
    res.render('./chatbot/course/jp');

});
router.post('/jp', function(req, res) {
    //console.log(req.body.teaching_method + "  teaching_method from test backend");
    const jp_report = new JP_Report(req.body);
    //console.log(student);
    jp_report.save((err,doc) => {
        if(err){
            return next(err)
        }
        res.redirect('/course/jp');
    })
    let sender_psid=req.body.fb_psid; 
    if(sender_psid){
        if(req.body.teaching_method==='團體'){
            JP_Courses.find({course_type:req.body.course_type/*, time_type:req.body.available_time*/, end_date:{$gt : new Date(`${req.body.available_begin_date}`)} },(err,jp_courses) =>{
                if(err){
                    return next(err)
                }
                api.sendCourseInfo(sender_psid,jp_courses);
            });
            
        }
        if(req.body.teaching_method==='1對1' || req.body.teaching_method==='線上1對1課程(Skype)' ){
            api.sendAbroadInfo(sender_psid);
        }
    }

});
router.get('/kr', (req, res, next) => {
    res.render('./chatbot/course/kr');
});
router.post('/kr', function(req, res) {
    //console.log(req.body.teaching_method + "  teaching_method from test backend");
    const kr_report = new KR_Report(req.body);
    //console.log(student);
    kr_report.save((err,doc) => {
        if(err){
            return next(err)
        }
        res.redirect('/course/kr');
    })
    let sender_psid=req.body.fb_psid; 
/*  console.log("course_type: "+req.body.course_type);
    console.log("available_time: "+req.body.available_time);
    console.log("available_begin_date: " + req.body.available_begin_date);
    console.log("teaching_method: " + req.body.teaching_method); */
    if(sender_psid){
        if(req.body.teaching_method==='團體'){
            //console.log("團體!");
            KR_Courses.find({course_type:req.body.course_type/*, time_type:req.body.available_time*/, end_date:  {$gt : new Date(`${req.body.available_begin_date}`)} },(err,kr_courses) =>{
                
                if(err){
                    return next(err)
                }
                //console.log("FIND!");
                api.sendCourseInfo(sender_psid,kr_courses);
            });
            
        }
        if(req.body.teaching_method==='1對1' || req.body.teaching_method==='線上1對1課程(Skype)' ){
            api.sendAbroadInfo(sender_psid);
        }
    }
});
  
router.get('/available', (req, res, next) => {
    if(req.user){
        JP_Courses.find({},{},{sort:{createdAt:-1}},(err,jp_courses) =>{
            if(err){
                return next(err)
            }
            KR_Courses.find({},{},{sort:{createdAt:-1}},(err,kr_courses) =>{
                if(err){
                    return next(err)
                }
                //console.log(`courses in index.js: ${courses}`);
                res.render('./chatbot/course/available',{
                    title:"正式課程開課總表",
                    jp_courses: jp_courses,
                    kr_courses: kr_courses,
                });
            });
        });
    }else{
        res.redirect('/');
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
                //console.log(`courses in index.js: ${courses}`);
                res.render('./chatbot/report/course_report',{
                    title:"正式課程諮詢總表",
                    jp_reports: jp_reports,
                    kr_reports: kr_reports,
                });
            });
        });
    }else{
        res.redirect('/');
    }
});
router.post('/delete', function(req, res) {

    if(req.user){
        const courses=req.body.course;
        if(typeof courses==='string'){
            let finalCourse = courses.split(" ");
            if(finalCourse[1] ==='日語'){
                JP_Courses.remove({_id:finalCourse[0]},(err) =>{
                    if(err){
                        return next(err)
                    }
                    
                })
            }else if(finalCourse[1] ==='韓語'){
                KR_Courses.remove({_id:finalCourse[0]},(err) =>{
                    if(err){
                        return next(err)
                    }
                    
                })
            }

        }else if(typeof courses==='object'){
            for(var i=0;i<= (courses.length-1);i++) {
                let finalCourse = courses[i].split(" ");
                if(finalCourse[1] ==='日語'){
                    JP_Courses.remove({_id:finalCourse[0]},(err) =>{
                        if(err){
                            return next(err)
                        }
                        
                    })
                }else if(finalCourse[1] ==='韓語'){
                    KR_Courses.remove({_id:finalCourse[0]},(err) =>{
                        if(err){
                            return next(err)
                        }
                        
                    })
                }
            }
        }
        res.redirect('/course/available');
    }else{
        res.redirect('/');
    }

});

router.post('/report/delete', function(req, res) {

    if(req.user){
        const courseReport=req.body.course_report;
        if(typeof courseReport==='string'){
            let finalCourse = courseReport.split(" ");
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
            }

        }else if(typeof courseReport==='object'){
            for(var i=0;i<= (courseReport.length-1);i++) {
                let finalCourse = courseReport[i].split(" ");
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
                }
            }
        }
        res.redirect('/course/report');
    }else{
        res.redirect('/');
    }

});


module.exports = router