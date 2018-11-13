const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.render('./oops/index-home-variation-video-background');

});


module.exports = router;
