const express = require('express');
const router = express.Router();
const passport = require('passport');
const Users = require('../../models/users');
const JP_Course = require('../../models/course/jp');
const JP_Trial = require('../../models/trial/jp');
const KR_Course = require('../../models/course/kr');
const KR_Trial = require('../../models/trial/kr');
const ENG_Trial = require('../../models/trial/eng');

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

router.get('/add_kr_course', (req, res, next) => {
    if(req.user){
        res.render('./chatbot/admin/add_kr_course',{
            title:"新增韓語課程",
        });
    }else{
        res.redirect('/');
    }

});

router.post('/add_kr_course', (req, res, next) => {
    if(req.user){
        const kr_course = new KR_Course(req.body);
        kr_course.save((err,doc) => {
          if(err){
              return next(err)
          }
          res.redirect('/admin/add_kr_course');
        })
    }else{
        res.redirect('/');
    }


});

router.get('/edit_kr_course/:id', (req, res) => {
    if(req.user){
        KR_Course.findOne({_id:req.params.id},(err,course) => {
            if(err){
                return next(err);
            }
            //console.log("thisone");
            res.render("./admin/edit_course",{
                course,
                title:"修改韓語正式課程",
                subtitle:"韓語",
                link:"edit_kr_course",
            });
            //console.log(req.parms.id);
        });
    }else{
        res.redirect('/');
    }
});

router.post('/edit_kr_course/:id',(req,res) => {
    if(req.user){
        KR_Course.update({_id:req.params.id},req.body,(err) =>{
            if(err){
                return next(err)
            }
            res.redirect('/course/available');
        });

    }else{
        res.redirect('/');
    }
});


router.get('/add_jp_trial', (req, res, next) => {
    if(req.user){
        res.render('./chatbot/admin/add_jp_trial',{
            title:"新增日語試聽課程",
        });
    }else{
        res.redirect('/');
    }
});

router.post('/add_jp_trial', (req, res, next) => {

    if(req.user){
        const jp_trial = new JP_Trial(req.body);
        jp_trial.save((err,doc) => {
          if(err){
              return next(err)
          }
          res.redirect('/admin/add_jp_trial');
        })
    }else{
        res.redirect('/');
    }
});

router.get('/edit_jp_trial/:id', (req, res) => {
    if(req.user){
        JP_Trial.findOne({_id:req.params.id},(err,trial) => {
            if(err){
                return next(err);
            }
            //console.log("thisone");
            res.render("./admin/edit_trial",{
                trial,
                title:"修改日語試聽課程",
                subtitle:"日語",
                link:"edit_jp_trial",
            });
            //console.log(req.parms.id);
        });
    }else{
        res.redirect('/');
    }
});

router.post('/edit_jp_trial/:id',(req,res) => {
    if(req.user){
        JP_Trial.update({_id:req.params.id},req.body,(err) =>{
            if(err){
                return next(err)
            }
            res.redirect('/trial/available');
        });

    }else{
        res.redirect('/');
    }
});


router.get('/add_kr_trial', (req, res, next) => {
    if(req.user){
        res.render('./chatbot/admin/add_kr_trial',{
            title:"新增韓語試聽課程",
        });
    }else{
        res.redirect('/');
    }

});

router.post('/add_kr_trial', (req, res, next) => {

    if(req.user){
        const kr_trial = new KR_Trial(req.body);
        kr_trial.save((err,doc) => {
          if(err){
              return next(err)
          }
          res.redirect('/admin/add_kr_trial');
        })
    }else{
        res.redirect('/');
    }

});

router.get('/edit_kr_trial/:id', (req, res) => {
    if(req.user){
        KR_Trial.findOne({_id:req.params.id},(err,trial) => {
            if(err){
                return next(err);
            }
            //console.log("thisone");
            res.render("./admin/edit_trial",{
                trial,
                title:"修改韓語試聽課程",
                subtitle:"韓語",
                link:"edit_kr_trial",
            });
            //console.log(req.parms.id);
        });
    }else{
        res.redirect('/');
    }
});

router.post('/edit_kr_trial/:id',(req,res) => {
    if(req.user){
        KR_Trial.update({_id:req.params.id},req.body,(err) =>{
            if(err){
                return next(err)
            }
            res.redirect('/trial/available');
        });

    }else{
        res.redirect('/');
    }
});

router.get('/add_eng_trial', (req, res, next) => {
    if(req.user){
        res.render('./chatbot/admin/add_eng_trial',{
            title:"新增英語試聽課程",
        });
    }else{
        res.redirect('/');
    }

});

router.post('/add_eng_trial', (req, res, next) => {

    if(req.user){
        const eng_trial = new ENG_Trial(req.body);
        eng_trial.save((err,doc) => {
          if(err){
              return next(err)
          }
          res.redirect('/admin/add_eng_trial');
        })
    }else{
        res.redirect('/');
    }

});

router.get('/edit_eng_trial/:id', (req, res) => {
    if(req.user){
        ENG_Trial.findOne({_id:req.params.id},(err,trial) => {
            if(err){
                return next(err);
            }
            //console.log("thisone");
            res.render("./admin/edit_trial",{
                trial,
                title:"修改英語試聽課程",
                subtitle:"英語",
                link:"edit_eng_trial",
            });
            //console.log(req.parms.id);
        });
    }else{
        res.redirect('/');
    }
});

router.post('/edit_eng_trial/:id',(req,res) => {
    if(req.user){
        ENG_Trial.update({_id:req.params.id},req.body,(err) =>{
            if(err){
                return next(err)
            }
            res.redirect('/trial/available');
        });

    }else{
        res.redirect('/');
    }
});

router.get('/login', (req, res, next) => {
    if(req.user){
        res.redirect('/');
    }else{
        res.render('./chatbot/admin/login');
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