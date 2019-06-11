const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.render('./admin/KR/index');
});
router.get('/sample', (req, res, next) => {
    res.render('./admin/KR/sample');
});
router.get('/blank', (req, res, next) => {
    res.render('./admin/KR/blank_page');
});

module.exports = router;
