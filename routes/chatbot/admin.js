const express = require('express');
const router = express.Router();
const passport = require('passport');
const Users = require('../../models/chatbot/users');


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