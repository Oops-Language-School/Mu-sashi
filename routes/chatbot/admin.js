const express = require('express');
const router = express.Router();
const passport = require('passport');
const Users = require('../../models/chatbot/users');
const JP_Course = require('../../models/chatbot/course/jp');
const JP_Trial = require('../../models/chatbot/trial/jp');
const KR_Course = require('../../models/chatbot/course/kr');
const KR_Trial = require('../../models/chatbot/trial/kr');
const ENG_Trial = require('../../models/chatbot/trial/eng');

router.get('/add_jp_course', (req, res, next) => {
    if(req.user){
        res.render('./chatbot/admin/add_jp_course',{
            title:"新增日語課程",
        });
    }else{
        res.redirect('/');
    }
});

router.post('/add_jp_course', (req, res, next) => {
    if(req.user){
        const jp_course = new JP_Course(req.body);
        jp_course.save((err,doc) => {
          if(err){
              return next(err)
          }
          res.redirect('/admin/add_jp_course');
        })
    }else{
        res.redirect('/');
    }
});
router.get('/edit_jp_course/:id', (req, res) => {
    if(req.user){
        JP_Course.findOne({_id:req.params.id},(err,course) => {
            if(err){
                return next(err);
            }
            //console.log("thisone");
            res.render("./admin/edit_course",{
                course,
                title:"修改日語正式課程",
                subtitle:"日語",
                link:"edit_jp_course",
            });
            //console.log(req.parms.id);
        });
    }else{
        res.redirect('/');
    }
});

router.post('/edit_jp_course/:id',(req,res) => {
    if(req.user){
        JP_Course.update({_id:req.params.id},req.body,(err) =>{
            if(err){
                return next(err)
            }
            res.redirect('/course/available');
        });

    }else{
        res.redirect('/');
    }
});


router.post('/login', passport.authenticate('local'), (req, res) => {
    res.redirect('/');
});
/*
router.get('/signup', (req, res) => {
    if(req.user){
        res.redirect('/');
    }else{
        res.render('./chatbot/admin/signup');
    }
});
  
router.post('/signup', (req, res, next) => {
    Users.register(new Users({ username : req.body.username, name: req.body.name }), req.body.password, (err, users) => {
        if (err) {
            return next(err)
        }
        passport.authenticate('local')(req, res, () => {
            res.redirect('/');
        });
      });
});*/

router.get('/logout', (req, res) => {
    if(req.user){
        req.logout();
        res.redirect('/admin/login');
    }else{
        res.redirect('/admin/login');
    }
});

module.exports = router