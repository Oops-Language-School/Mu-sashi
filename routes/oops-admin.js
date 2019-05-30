const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.render('./admin-lte/index');
});
router.get('/nav', (req, res, next) => {
    res.render('./admin-lte/nav_top');
});


module.exports = router;
